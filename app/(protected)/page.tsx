// import { redirect } from "next/navigation";

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
    <div className="flex-1 flex overflow-hidden">
      {/* <ServerNav /> */}
      {/* <DirectMessages /> */}
      {/* <ChannelNav /> */}
      <h1>Hello world</h1>
    </div>
  );
};

export default MainPage;
