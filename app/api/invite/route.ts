import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { serverId } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!serverId)
      return new NextResponse("Invite code not found", { status: 400 });

    const member = await db.member.create({
      data: {
        role: MemberRole.DEFAULT,
        profileId: profile.id,
        serverId: serverId,
      },
    });

    return NextResponse.json(member);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
