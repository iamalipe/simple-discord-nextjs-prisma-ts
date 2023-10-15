// "use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChannelType, Category } from "@prisma/client";

import ProfileBar from "../profile-bar/profile-bar";
import {
  CategoryWithChannel,
  ChannelsAccordionItem,
} from "./channels-accordion-item";
import { ChannelTitle } from "./channel-title";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ServerWithCategoriesAndChannel } from "@/types";

export interface ChannelsAsideProps {
  server: ServerWithCategoriesAndChannel | null;
}
export const ChannelsAside = async ({ server }: ChannelsAsideProps) => {
  const categories = server?.categories;

  return (
    <aside className="flex h-full w-[280px] flex-none flex-col overflow-hidden border-x border-l-base-100 border-r-base-300 bg-base-200">
      <ChannelTitle server={server} />
      <ScrollArea className="w-full flex-1">
        {categories?.map((e, index) => (
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
