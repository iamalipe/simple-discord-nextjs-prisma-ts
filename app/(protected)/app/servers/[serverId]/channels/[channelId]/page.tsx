import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";

import { ChannelsAside } from "@/components/channels-aside";
import { db } from "@/lib/db";

interface ChannelPageProps {
  params: {
    channelId: string;
  };
}

const ChannelPage = async ({ params }: ChannelPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  return (
    <>
      <div className="flex-1 bg-red-800">ChannelPage</div>
    </>
  );
};

export default ChannelPage;
