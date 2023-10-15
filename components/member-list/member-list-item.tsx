"use client";

import { Member, Profile } from "@prisma/client";
import * as Avatar from "@radix-ui/react-avatar";
import { UserPlus } from "lucide-react";

export interface MemberListItemProps {
  data: Member & { profile: Profile };
  myId: string;
}
export const MemberListItem = (props: MemberListItemProps) => {
  const { profile } = props.data;

  const onDirectMessage = async () => {
    console.log(profile);
  };

  return (
    <div className="group mx-2 my-1 flex h-12 w-[calc(240px-16px)] flex-none items-center overflow-hidden rounded-md px-2 hover:bg-base-content/20">
      <Avatar.Root className="relative mr-2 flex h-[32px] w-[32px] flex-none shrink-0 overflow-hidden rounded-daisy-badge">
        <Avatar.Image
          src={profile.imageUrl}
          className="aspect-square h-full w-full"
        />
        <Avatar.Fallback className="bg-muted flex h-full w-full items-center justify-center rounded-daisy-badge">
          CN
        </Avatar.Fallback>
      </Avatar.Root>
      <div className="flex flex-1 flex-col overflow-hidden leading-tight">
        <p className="select-none overflow-hidden text-ellipsis whitespace-nowrap">
          {profile.name === "null null" ? profile.username : profile.name}
        </p>
        {/* <p className="select-none overflow-hidden text-ellipsis whitespace-nowrap text-sm font-light">
          {profile.name === "null null" ? profile.username : profile.name}
        </p> */}
      </div>
      {props.myId !== profile.id && (
        <button
          onClick={onDirectMessage}
          className="hidden rounded-md p-1 hover:text-primary-content group-hover:block"
        >
          <UserPlus size={16} />
        </button>
      )}
    </div>
  );
};
