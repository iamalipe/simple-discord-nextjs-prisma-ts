import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.server.create({
      data: {
        profileId: profile.id,
        name: name,
        imageUrl: imageUrl,
        inviteCode: nanoid(),
      },
    });
    const member = await db.member.create({
      data: {
        role: "OWNER",
        profileId: profile.id,
        serverId: server.id,
      },
    });
    const categoryText = await db.category.create({
      data: {
        name: "Text Channels",
        type: "TEXT",
        memberId: member.id,
        serverId: server.id,
      },
    });
    await db.channel.create({
      data: {
        name: "General",
        categoryId: categoryText.id,
        memberId: member.id,
        type: "TEXT",
      },
    });
    const categoryVoice = await db.category.create({
      data: {
        name: "Voice Channels",
        type: "AUDIO_VIDEO",
        memberId: member.id,
        serverId: server.id,
      },
    });
    await db.channel.create({
      data: {
        name: "General",
        categoryId: categoryVoice.id,
        memberId: member.id,
        type: "AUDIO_VIDEO",
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
