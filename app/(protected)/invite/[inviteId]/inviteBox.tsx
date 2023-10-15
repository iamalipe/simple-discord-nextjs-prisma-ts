"use client";

import { Server } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface InviteBoxProps {
  server: Server;
}
const InviteBox = (props: InviteBoxProps) => {
  const { server } = props;
  const router = useRouter();

  const onJoinServer = async () => {
    await axios.post("/api/invite", {
      // inviteCode: server.inviteCode,
      serverId: server.id,
    });

    router.refresh();
    window.location.reload();
  };

  return (
    <div className="m-8 flex w-full flex-col items-center gap-4 rounded-md bg-base-300 p-8 drop-shadow-2xl sm:m-0 sm:w-[400px]">
      <div className="daisy-avatar">
        <div className="w-24 rounded-full">
          <Image
            src={server.imageUrl}
            alt={server.name}
            width={96}
            height={96}
          />
        </div>
      </div>
      <span>You are invited to</span>
      <h1 className="text-xl font-bold">{server.name}</h1>
      <div className="flex w-full flex-col justify-evenly gap-4 sm:flex-row sm:gap-0">
        <Link
          href="/app"
          className="daisy-btn daisy-btn-secondary daisy-btn-xs sm:daisy-btn-sm"
        >
          Back to Home
        </Link>
        <button
          onClick={onJoinServer}
          className="daisy-btn daisy-btn-primary daisy-btn-xs sm:daisy-btn-sm"
        >
          Join Server
        </button>
      </div>
    </div>
  );
};

export default InviteBox;
