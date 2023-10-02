"use client";

import * as Avatar from "@radix-ui/react-avatar";
import { useClerk } from "@clerk/nextjs";

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
      <Avatar.Root className="relative mr-2 flex h-[30px] w-[30px] shrink-0 overflow-hidden rounded-daisy-badge">
        <Avatar.Image
          src={props.imageUrl}
          className="aspect-square h-full w-full"
        />
        <Avatar.Fallback className="bg-muted flex h-full w-full items-center justify-center rounded-full">
          {props.name[0] + props.name[1]}
        </Avatar.Fallback>
      </Avatar.Root>
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
