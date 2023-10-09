import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, type, categoryId, serverId } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const member = await db.member.findFirst({
      where: {
        profileId: profile.id,
        serverId: serverId,
      },
    });
    if (!member) {
      return new NextResponse("You are not a member of this server.", {
        status: 400,
      });
    }

    const channel = await db.channel.create({
      data: {
        name: name,
        categoryId: categoryId,
        memberId: member.id,
        type: type,
      },
    });

    return NextResponse.json(channel);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
