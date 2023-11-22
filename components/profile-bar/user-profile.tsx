"use client";

import { useLayoutEffect } from "react";
import { X } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";

// import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme-store";
import { useSocket } from "@/components/providers";

const THEME_NAME = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export interface UserProfileProps {
  name: string;
  username: string;
  imageUrl: string;
}
const UserProfile = (props: UserProfileProps) => {
  const { currentTheme, onChange } = useTheme();
  const { isConnected } = useSocket();

  useLayoutEffect(() => {
    const theme = localStorage.getItem("useTheme") || "dark";
    onChange(theme);
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;
    htmlElement.setAttribute("data-theme", theme);
  }, [onChange]);

  const onChangeTheme = (newTheme: string) => {
    onChange(newTheme);
  };

  return (
    <Popover.Root>
      <Popover.Trigger className="flex flex-1 cursor-pointer items-center overflow-hidden rounded-daisy-btn px-1 text-base-content hover:bg-base-content/25">
        {/* <Avatar
          className="h-[30px] w-[30px]"
          src={props.imageUrl}
          fallbackString={props.name[0] + props.name[1]}
        /> */}
        <div className="daisy-avatar mr-3">
          <div
            className={cn([
              "h-[30px] w-[30px] rounded-full",
              isConnected && "ring ring-success",
            ])}
          >
            <Image
              src={props.imageUrl}
              width={100}
              height={100}
              alt="profile"
            />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden text-left text-xs">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap font-bold tracking-wider">
            {props.name}
          </span>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap font-light">
            {props.username}
          </span>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="flex max-h-80 w-[160px] flex-col rounded-md bg-base-content p-2 text-base-300 drop-shadow-lg will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          <div className="flex flex-none items-center justify-between">
            <h1 className="text-xl font-bold">Theme</h1>
            <Popover.Close
              className="rounded-daisy-btn p-0.5 hover:bg-base-300 hover:text-base-content"
              aria-label="Close"
            >
              <X size={18} />
            </Popover.Close>
          </div>
          <div className="flex flex-1 flex-col gap-1 overflow-auto pr-1.5">
            {THEME_NAME.map((e, index) => (
              <button
                key={index}
                onClick={() => onChangeTheme(e)}
                className={cn([
                  "w-full rounded-sm px-2 text-left hover:bg-base-100/10",
                  currentTheme === e && "bg-base-100/25 hover:bg-base-100/25",
                ])}
              >
                {e}
              </button>
            ))}
          </div>
          <Popover.Arrow className="fill-base-content" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default UserProfile;