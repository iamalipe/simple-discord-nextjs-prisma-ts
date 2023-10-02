"use client";

import { Volume1, Video, Hash, Settings, UserPlus } from "lucide-react";

export interface ChannelContentProps {
  name: string;
  type: string;
  id: string;
}

export const ChannelContent = ({ name, type }: ChannelContentProps) => {
  return (
    <div className="mx-1 flex h-[34px] items-center gap-[1px] overflow-hidden rounded-daisy-btn bg-base-content/25 pr-1 text-base-content">
      {type === "text" && <Hash size={34} className="flex-none p-[7px]" />}
      {type === "audio" && <Volume1 size={34} className="flex-none p-[7px]" />}
      {type === "video" && <Video size={34} className="flex-none p-[7px]" />}
      <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-base">
        {name}
      </span>
      <UserPlus size={20} className="flex-none p-0.5" />
      <Settings size={20} className="flex-none p-0.5" />
    </div>
  );
};
