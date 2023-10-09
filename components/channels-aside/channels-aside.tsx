// "use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChannelType, Category } from "@prisma/client";

import ProfileBar from "../profile-bar/profile-bar";
import {
  CategoryWithChannel,
  ChannelsAccordionItem,
} from "./channels-accordion-item";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface ChannelsAsideProps {
  Category?: Category[];
}
export const ChannelsAside = async ({ Category }: ChannelsAsideProps) => {
  return (
    <aside className="flex h-full w-[280px] flex-none flex-col overflow-hidden border-x border-l-base-100 border-r-base-300 bg-base-200">
      <div className="mb-1 h-12 border-b border-b-base-content/50 p-2">
        <button className="h-full w-full rounded-daisy-btn bg-base-content/25 text-center text-sm text-base-content hover:bg-base-content/40">
          Find or start a conversation
        </button>
      </div>
      <ScrollArea className="w-full flex-1">
        {Category?.map((e, index) => (
          <ChannelsAccordionItem
            key={index}
            category={e as CategoryWithChannel}
          />
        ))}
      </ScrollArea>
      <ProfileBar />
    </aside>
  );
};
