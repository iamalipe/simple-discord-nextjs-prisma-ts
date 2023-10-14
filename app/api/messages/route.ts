import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { Messages } from "@prisma/client";

const MESSAGES_BATCH = 10;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const cursor = searchParams.get("cursor");
    const channelId = searchParams.get("channelId");

    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!channelId) {
      return new NextResponse("Channel ID missing", { status: 400 });
    }

    let messages: Messages[] = [];

    if (cursor) {
      messages = await db.messages.findMany({
        take: MESSAGES_BATCH,
        skip: 1,
        cursor: {
          id: cursor,
        },
        where: {
          channelId: channelId,
        },
        include: {
          channel: {
            include: {
              member: true,
              category: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      messages = await db.messages.findMany({
        take: MESSAGES_BATCH,
        where: {
          channelId,
        },
        include: {
          channel: {
            include: {
              member: true,
              category: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    let nextCursor = null;

    if (messages.length === MESSAGES_BATCH) {
      nextCursor = messages[MESSAGES_BATCH - 1].id;
    }

    return NextResponse.json({
      messages,
      nextCursor,
    });
  } catch (error) {
    console.log("[MESSAGES_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
// export async function POST(req: Request) {
//   try {
//     const { text, channelId, attachment } = await req.json();
//     const profile = await currentProfile();

//     if (!profile) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     const member = await db.member.findFirst({
//       where: {
//         channels: {
//           some: {
//             id: channelId,
//           },
//         },
//         profileId: profile.id,
//       },
//     });

//     const messages = await db.messages.create({
//       data: {
//         text: text,
//         senderId: member?.id || profile.id,
//         channelId: channelId,
//         attachment: attachment,
//       },
//     });

//     return NextResponse.json(messages);
//   } catch (error) {
//     console.log("[SERVERS_POST]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }
