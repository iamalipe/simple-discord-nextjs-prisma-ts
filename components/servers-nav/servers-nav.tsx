import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ServerAdd, ServerItem, ServerSelf } from ".";

export const ServersNav = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <nav className="flex w-[72px] flex-none flex-col items-center overflow-hidden bg-base-300">
      <ServerSelf />
      <div className="h-0.5 w-1/2 flex-none bg-base-100"></div>
      <div className="scrollbar-hide flex w-full flex-1 flex-col items-center overflow-y-auto overflow-x-hidden">
        {servers.map((e, index) => (
          <ServerItem key={index} data={e} />
        ))}
      </div>
      <div className="h-0.5 w-1/2 flex-none bg-base-100"></div>
      <ServerAdd />
    </nav>
  );
};
