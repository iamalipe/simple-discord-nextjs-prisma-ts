import { redirectToSignIn } from "@clerk/nextjs";

import { ChannelsAside } from "@/components/channels-aside/channels-aside";
import { ServersNav } from "@/components/servers-nav";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { Channel, ChannelType } from "@prisma/client";
import { MemberList } from "@/components/member-list";
import { ServerWithCategoriesAndChannel } from "@/types";

export interface ChannelLayoutProps {
  children: React.ReactNode;
  params: {
    serverId: string;
  };
}

// NOTE : this is the /app/server/[id] page, responsible for rendering categories and channels
const ServerLayout = async ({ children, params }: ChannelLayoutProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
    },
    include: {
      members: {
        include: {
          profile: true,
        },
      },
      categories: {
        include: {
          channel: true,
        },
      },
    },
  });

  return (
    <>
      <ChannelsAside server={server} />
      {children}
      <MemberList myProfile={profile} server={server} />
    </>
  );
};

export default ServerLayout;
