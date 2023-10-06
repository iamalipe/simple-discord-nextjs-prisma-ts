// import { redirect } from "next/navigation";

import { ChannelsAside } from "@/components/channels-aside";
import { ModalProvider } from "@/components/provider/modal-provider";
import { ServersNav } from "@/components/servers-nav";

// import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

const MainPage = async () => {
  await initialProfile();

  return (
    <>
      <ModalProvider />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex w-[312px] overflow-hidden">
          <ServersNav />
          <ChannelsAside />
          {/* <div className="flex flex-1 bg-base-200">Hello channel</div> */}
        </div>
        {/* <DirectMessages /> */}
        {/* <ChannelNav /> */}
      </div>
    </>
  );
};

export default MainPage;
