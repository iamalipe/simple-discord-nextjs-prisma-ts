import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    // const { name, imageUrl } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.server.findMany({
      where: {
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
      include: {
        members: true,
        categories: {
          include: {
            channel: true,
          },
        },
      },
    });

    const category = await db.category.findMany({
      where: {
        serverId: server[0].id,
      },
    });

    return NextResponse.json({ ok: true, server, category });
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
