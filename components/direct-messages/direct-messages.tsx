import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import ProfileBar from "@/components/profile-bar/profile-bar";
import { db } from "@/lib/db";
import { DirectMessagesItem } from ".";

export const DirectMessages = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  // const servers = await db.server.findMany({
  //   where: {
  //     members: {
  //       some: {
  //         profileId: profile.id,
  //       },
  //     },
  //   },
  // });

  return (
    <div className="flex h-full flex-1 flex-col overflow-hidden border-x border-l-base-100 border-r-base-300 bg-base-200">
      <div className="mb-1 h-12 border-b border-b-base-content/50 p-2">
        <button className="h-full w-full rounded-daisy-btn bg-base-content/25 text-center text-sm text-base-content hover:bg-base-content/40">
          Find or start a conversation
        </button>
      </div>
      {/* <Separator className="flex-none bg-[#1e1f22]" /> */}
      <span className="flex-none px-3 py-1 text-xs font-bold">
        DIRECT MESSAGES
      </span>
      {/* <ScrollArea className="flex-1 w-full"> */}
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      {/* </ScrollArea> */}
      <ProfileBar />
    </div>
  );
};
