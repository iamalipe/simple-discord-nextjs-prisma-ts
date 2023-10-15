import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";

// import { ChannelsAside } from "@/components/channels-aside/channels-aside";
// import { db } from "@/lib/db";
import { MessagePanel } from "@/components/message-panel";

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
      <MessagePanel channelId={params.channelId} />
    </>
  );
};

export default ChannelPage;
