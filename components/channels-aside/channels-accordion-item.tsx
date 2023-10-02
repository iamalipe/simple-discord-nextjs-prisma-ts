"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

import { ChannelContent } from "./channel-content";
import { CChannels } from "./channels-aside";

export interface ChannelsAccordionItemProps {
  groupName: string;
  channels: CChannels[];
}

export const ChannelsAccordionItem = ({
  groupName,
  channels,
}: ChannelsAccordionItemProps) => {
  return (
    <Accordion.Root type="single">
      <Accordion.Item value={groupName}>
        <Accordion.Header className="flex overflow-hidden">
          <Accordion.Trigger className="flex flex-1 items-center overflow-hidden text-xs font-bold uppercase tracking-wider text-base-content/50 hover:text-base-content [&[data-state=open]>svg]:rotate-90">
            <ChevronRight className="h-4 w-4 flex-none transition-transform duration-200" />
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {groupName}
            </span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="flex flex-col gap-1 overflow-hidden py-1">
          {channels.map((e, index) => (
            <ChannelContent key={index} id={e.id} name={e.name} type={e.type} />
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
