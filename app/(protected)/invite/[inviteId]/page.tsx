// http://localhost:3000/invite/8yFzITcZyQ2eaY5LVOpbZ
// CodyX1@mailinator.com
// CodyX1@1234

import { redirect } from "next/navigation";
import Link from "next/link";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import InviteBox from "./inviteBox";

interface InvitePageProps {
  params: {
    inviteId: string;
  };
}
const InvitePage = async (props: InvitePageProps) => {
  const { inviteId } = props.params;

  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      inviteCode: inviteId,
    },
    include: {
      members: true,
    },
  });

  if (!server)
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="m-8 flex w-full flex-col items-center gap-4 rounded-md bg-base-300 p-8 drop-shadow-2xl sm:m-0 sm:w-[400px]">
          <h1>Server not found.</h1>
          <span className="text-center">
            Invite code maybe change or server get deleted
          </span>
          <Link
            href="/app"
            className="daisy-btn daisy-btn-secondary daisy-btn-xs sm:daisy-btn-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );

  const existingServer = server.members.find((e) => e.profileId === profile.id);
  if (existingServer)
    return redirect(`/app/servers/${existingServer.serverId}`);

  return (
    <div className="flex flex-1 items-center justify-center">
      <InviteBox server={server} />
    </div>
  );
};

export default InvitePage;
