"use client";

import { useClerk } from "@clerk/nextjs";
import { Avatar } from "@/components/ui/avatar";

export interface UserProfileProps {
  name: string;
  username: string;
  imageUrl: string;
}
const UserProfile = (props: UserProfileProps) => {
  const clerk = useClerk();

  const onProfileOpen = () => {
    clerk.openUserProfile();
  };

  return (
    <div
      onClick={onProfileOpen}
      className="flex flex-1 cursor-pointer items-center overflow-hidden rounded-daisy-btn px-1 text-base-content hover:bg-base-content/25"
    >
      <Avatar
        className="h-[30px] w-[30px]"
        src={props.imageUrl}
        fallbackString={props.name[0] + props.name[1]}
      />
      <div className="flex flex-col overflow-hidden text-xs">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap font-bold tracking-wider">
          {props.name}
        </span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap font-light">
          {props.username}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
