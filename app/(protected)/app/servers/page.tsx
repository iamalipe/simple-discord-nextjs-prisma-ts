import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

const ServerRedirectPage = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  // NOTE : This Find the 1st server of that user and redirect to it.
  // NOTE : If There is no server then redirect to /app page.

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/app/servers/${server.id}`);
  }

  return redirect(`/app`);
};

export default ServerRedirectPage;
