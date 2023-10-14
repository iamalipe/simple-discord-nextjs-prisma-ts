"use client";

import * as Avatar from "@radix-ui/react-avatar";

export const MemberListItem = () => {
  return (
    <div className="mx-2 my-1 flex h-8 items-center rounded-md px-2 hover:bg-base-content/20">
      <Avatar.Root className="relative mr-2 flex h-[26px] w-[26px] shrink-0 overflow-hidden rounded-daisy-badge">
        <Avatar.Image
          src="https://github.com/shadcn.png"
          className="aspect-square h-full w-full"
        />
        <Avatar.Fallback className="bg-muted flex h-full w-full items-center justify-center rounded-daisy-badge">
          CN
        </Avatar.Fallback>
      </Avatar.Root>
      <p className="select-none">User Name</p>
    </div>
  );
};
