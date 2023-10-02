import ProfileBar from "../profile-bar/profile-bar";
import { ChannelsAccordionItem } from "./channels-accordion-item";
import * as Accordion from "@radix-ui/react-accordion";

export interface CChannels {
  name: string;
  type: string;
  id: string;
}

export interface CChannelsData {
  groupName: string;
  channels: {
    name: string;
    type: string;
    id: string;
  }[];
}

const data: CChannelsData[] = [
  {
    groupName: "Audio Channel",
    channels: [
      {
        name: "Audio Channel A11",
        type: "audio",
        id: "Aasd324",
      },
      {
        name: "Audio Channel A12",
        type: "audio",
        id: "Aasd322",
      },
      {
        name: "Audio Channel A13",
        type: "audio",
        id: "Aasd323",
      },
    ],
  },
  {
    groupName: "Text Channel",
    channels: [
      {
        name: "Text Channel A11",
        type: "text",
        id: "Text24",
      },
      {
        name: "Text Channel A12",
        type: "text",
        id: "Text22",
      },
      {
        name: "Text Channel A13",
        type: "text",
        id: "Text323",
      },
    ],
  },
  {
    groupName: "Video Channel",
    channels: [
      {
        name: "Video Channel A11",
        type: "video",
        id: "Video43",
      },
      {
        name: "Video Channel A12",
        type: "video",
        id: "Video11",
      },
      {
        name: "Video Channel A13",
        type: "video",
        id: "Video23",
      },
    ],
  },
];

export const ChannelsAside = () => {
  return (
    <aside className="flex h-full flex-1 flex-col overflow-hidden border-x border-l-base-100 border-r-base-300 bg-base-200">
      <div className="mb-1 h-12 border-b border-b-base-content/50 p-2">
        <button className="h-full w-full rounded-daisy-btn bg-base-content/25 text-center text-sm text-base-content hover:bg-base-content/40">
          Find or start a conversation
        </button>
      </div>
      {/* <ScrollArea className="w-full flex-1"> */}
      {/* <Accordion.Root type="multiple">
        {data.map((e, index) => {
          return (
            <ChannelsAccordionItem
              key={index}
              groupName={e.groupName}
              channels={e.channels}
            />
          );
        })}
      </Accordion.Root> */}
      {/* </ScrollArea> */}
      <ProfileBar />
    </aside>
  );
};
