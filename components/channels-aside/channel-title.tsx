"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { ServerWithCategoriesAndChannel } from "@/types";
import { ChevronDown, X } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

export interface ChannelTitleProps {
  server: ServerWithCategoriesAndChannel | null;
}
export const ChannelTitle = (props: ChannelTitleProps) => {
  const { onOpen } = useModal();

  const onInvitePeople = () => {
    if (!props.server) return;
    onOpen("invite", {
      server: props.server,
    });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="group mb-1 flex h-12 flex-none select-none items-center border-b border-b-base-content/50 p-2 hover:bg-base-300 data-[state=open]:bg-base-300">
          <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold tracking-wider text-base-content">
            {props.server?.name}
          </span>
          <ChevronDown className="flex-none group-[&[data-state=open]]:hidden" />
          <X className="flex-none group-[&[data-state=closed]]:hidden" />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-[280px]">
          <div className="m-2 flex select-none flex-col gap-1 rounded-md bg-base-300 p-2 contrast-150 drop-shadow-lg">
            <DropdownMenu.Item
              onClick={onInvitePeople}
              className="rounded-sm px-2 py-1 hover:bg-accent hover:text-accent-content"
            >
              Invite People
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-0.5 rounded-md bg-base-content/30" />
            <DropdownMenu.Item className="rounded-sm px-2 py-1 hover:bg-accent hover:text-accent-content">
              Create Category
            </DropdownMenu.Item>
            <DropdownMenu.Item className="rounded-sm px-2 py-1 hover:bg-accent hover:text-accent-content">
              Server Settings
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-0.5 rounded-md bg-base-content/30" />
            <DropdownMenu.Item className="rounded-sm px-2 py-1 hover:bg-accent hover:text-accent-content">
              Leave Server
            </DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
