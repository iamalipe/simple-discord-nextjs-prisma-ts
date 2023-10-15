"use client";

import { cn } from "@/lib/utils";
import { Channel, ChannelType } from "@prisma/client";
import { Volume1, Hash, Settings, UserPlus } from "lucide-react";
import { useParams } from "next/navigation";

export interface ChannelContentProps {
  channel: Channel;
}
export const ChannelContent = ({ channel }: ChannelContentProps) => {
  const params = useParams();

  const onAddUser = () => {
    console.log("onAddUser");
  };
  const onChannelSettings = () => {
    console.log("onChannelSettings");
  };
  const onOpenChannel = () => {
    console.log("onOpenChannel");
  };

  return (
    <div
      className={cn([
        "group mx-1 flex h-[34px] cursor-pointer items-center gap-[1px] overflow-hidden rounded-daisy-btn pr-1 text-base-content",
        channel.id === params?.channelId && "bg-base-content/25",
      ])}
    >
      {channel.type === ChannelType.TEXT && (
        <Hash size={34} className="flex-none p-[7px] hover:text-white" />
      )}
      {channel.type === ChannelType.AUDIO_VIDEO && (
        <Volume1 size={34} className="flex-none p-[7px] hover:text-white" />
      )}
      <span
        onClick={onOpenChannel}
        className="flex-1 select-none overflow-hidden text-ellipsis whitespace-nowrap text-base hover:text-white"
      >
        {channel.name}
      </span>
      <UserPlus
        onClick={onAddUser}
        size={20}
        className="invisible flex-none p-0.5 hover:text-white group-hover:visible"
      />
      <Settings
        onClick={onChannelSettings}
        size={20}
        className="invisible flex-none p-0.5 hover:text-white group-hover:visible"
      />
    </div>
  );
};
