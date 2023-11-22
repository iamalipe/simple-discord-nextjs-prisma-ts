import { NextApiRequest } from "next";

import { NextApiResponseServerIo } from "@/types";
import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const profile = await currentProfilePages(req);

    if (!profile) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { content, attachment } = req.body;
    const channelId = req.query.channelId as string;

    if (!channelId) {
      return res.status(400).json({ error: "Channel ID missing" });
    }

    if (!content) {
      return res.status(400).json({ error: "content missing" });
    }

    const member = await db.member.findFirst({
      where: {
        channels: {
          some: {
            id: channelId,
          },
        },
        profileId: profile.id,
      },
    });

    if (!member) {
      return res
        .status(400)
        .json({ error: "you are not a member of this channel" });
    }

    const messages = await db.messages.create({
      data: {
        text: content,
        senderId: member.id,
        channelId: channelId,
        attachment: attachment,
      },
    });

    const channelKey = `channel:${channelId}:messages`;
    res?.socket?.server?.io?.emit(channelKey, messages);

    return res.status(200).json(messages);
  } catch (error) {
    console.log("[MESSAGES_POST]", error);
    return res.status(500).json({ message: "Internal Error" });
  }
}
