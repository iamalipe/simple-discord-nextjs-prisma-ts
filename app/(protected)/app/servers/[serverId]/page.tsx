import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface ServerPageProps {
  params: {
    serverId: string;
  };
}

// NOTE : this is the /app/server page, responsible for forwarded to initial channel
const ServerPage = async ({ params }: ServerPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
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

  const initialCategories = server?.categories.find(
    (e) => e.type === "TEXT" && e.channel.length > 0,
  );

  if (!initialCategories) return <div>No Text Channels</div>;

  const initialChannel = initialCategories?.channel[0];
  return redirect(
    `/app/servers/${params.serverId}/channels/${initialChannel?.id}`,
  );
};

export default ServerPage;
