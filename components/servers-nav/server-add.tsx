"use client";

import { Plus } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";

// import { useModal } from "@/hooks/use-modal-store";

export const ServerAdd = () => {
  // const { onOpen } = useModal();

  const onClick = () => {
    // onOpen("createServer");
  };

  return (
    <Tooltip.Root>
      <div className="group my-2 flex w-full flex-none items-center">
        <Tooltip.Trigger
          onClick={onClick}
          className="group relative ml-3  flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[24px] bg-base-content/50 text-base-300 transition-all group-hover:rounded-[16px] group-hover:bg-accent group-hover:text-accent-content"
        >
          <Plus />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded-daisy-btn bg-black px-[15px] py-[10px] text-[15px] leading-none text-base-content shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
            sideOffset={18}
            side="right"
          >
            <Tooltip.Arrow className="fill-black" />
            Add a Server
          </Tooltip.Content>
        </Tooltip.Portal>
      </div>
    </Tooltip.Root>
  );
};
