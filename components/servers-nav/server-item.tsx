"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

export interface ServerItemProps {
  data: {
    id: string;
    name: string;
    imageUrl: string;
    inviteCode: string;
    profileId: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
export const ServerItem = ({ data }: ServerItemProps) => {
  const { id, name, imageUrl, inviteCode } = data;

  const params = useParams();
  const router = useRouter();
  const onClick = () => {
    router.push(`/app/servers/${id}`);
  };

  const isAlert = false;

  return (
    <Tooltip.Root>
      <div className="group my-2 flex w-full flex-none items-center">
        <div
          className={cn(
            "h-0 w-[4px] rounded-full bg-base-content transition-all",
            isAlert && "h-[8px]",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id && "h-[32px]",
          )}
        />
        <Tooltip.Trigger
          onClick={onClick}
          className={cn(
            "group relative ml-2 flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[24px] bg-base-content/50 text-base-300 transition-all group-hover:rounded-[16px]",
            params?.serverId === id && "rounded-[16px]",
          )}
        >
          <Image fill src={imageUrl} alt={name} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded-daisy-btn bg-black px-[15px] py-[10px] text-[15px] leading-none text-base-content shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
            sideOffset={18}
            side="right"
          >
            <Tooltip.Arrow className="fill-black" />
            {name.toLowerCase()}
          </Tooltip.Content>
        </Tooltip.Portal>
      </div>
    </Tooltip.Root>
  );
};
