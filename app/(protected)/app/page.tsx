// import { redirect } from "next/navigation";

import { ChannelsAside } from "@/components/channels-aside";
import { ServersNav } from "@/components/servers-nav";

// import { db } from "@/lib/db";
// import { initialProfile } from "@/lib/initial-profile";

const MainPage = async () => {
  // const profile = await initialProfile();

  // const server = await db.server.findFirst({
  //   where: {
  //     members: {
  //       some: {
  //         profileId: profile.id,
  //       },
  //     },
  //   },
  // });

  // if (server) {
  //   return redirect(`/servers/${server.id}`);
  // }

  // return <InitialModal />;

  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex w-[312px] overflow-hidden">
        <ServersNav />
        <ChannelsAside />
        {/* <div className="flex flex-1 bg-base-200">Hello channel</div> */}
      </div>
      {/* <DirectMessages /> */}
      {/* <ChannelNav /> */}
    </div>
  );
};

export default MainPage;
