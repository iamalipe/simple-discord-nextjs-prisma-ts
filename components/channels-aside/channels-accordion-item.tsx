"use client";

import { Category, Channel } from "@prisma/client";
import { ChevronRight, Plus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Tooltip from "@radix-ui/react-tooltip";

import { ChannelContent } from "./channel-content";
import { useParams } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";

export interface CategoryWithChannel extends Category {
  channel: Channel[];
}
export interface ChannelsAccordionItemProps {
  category: CategoryWithChannel;
}

export const ChannelsAccordionItem = ({
  category,
}: ChannelsAccordionItemProps) => {
  const { onOpen } = useModal();

  const onCreateChannel = () => {
    onOpen("createChannel", {
      category: category,
    });
  };

  return (
    <Accordion.Root
      type="single"
      defaultValue={category.name}
      className="mt-2"
      collapsible
    >
      <Accordion.Item value={category.name}>
        <Accordion.Header className="flex overflow-hidden">
          <Accordion.Trigger className="flex flex-1 items-center overflow-hidden text-xs font-bold uppercase tracking-wider text-base-content/50 hover:text-base-content [&[data-state=open]>svg]:rotate-90">
            <ChevronRight className="h-4 w-4 flex-none transition-transform duration-200" />
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {category.name}
            </span>
          </Accordion.Trigger>
          <Tooltip.Root>
            <Tooltip.Trigger
              onClick={onCreateChannel}
              className="mr-2 text-base-content/50 hover:text-base-content"
            >
              <Plus strokeWidth={3} className="h-4 w-4 flex-none" />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={8}
                className="select-none rounded-daisy-btn bg-black px-[15px] py-[10px] text-[15px] leading-none text-base-content shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
              >
                Create Channel
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Accordion.Header>
        <Accordion.Content className="flex flex-col gap-1 overflow-hidden py-1">
          {category.channel.map((e, index) => (
            <ChannelContent key={index} channel={e} />
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
