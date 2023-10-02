import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import UserProfile from "./user-profile";
import ProfileControl from "./profile-control";

const ProfileBar = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="mt-auto flex h-[52px] flex-none bg-base-300 p-2">
      <UserProfile
        username={user.username || ""}
        name={user.firstName || ""}
        imageUrl={user.imageUrl}
      />
      <ProfileControl />
    </div>
  );
};

export default ProfileBar;
