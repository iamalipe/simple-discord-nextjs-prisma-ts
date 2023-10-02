import * as Avatar from "@radix-ui/react-avatar";

export interface DirectMessagesItemProps {}
export const DirectMessagesItem = ({}: DirectMessagesItemProps) => {
  return (
    <div className="bg-discord-channel-nav-item-current hover:bg-discord-channel-nav-item-hover mx-2 my-1 flex h-10 items-center rounded-md px-1">
      <Avatar.Root className="relative mr-2 flex h-[30px] w-[30px] shrink-0 overflow-hidden rounded-daisy-badge">
        <Avatar.Image
          src="https://github.com/shadcn.png"
          className="aspect-square h-full w-full"
        />
        <Avatar.Fallback className="bg-muted flex h-full w-full items-center justify-center rounded-full">
          CN
        </Avatar.Fallback>
      </Avatar.Root>
      <p className="select-none text-zinc-300">User Name</p>
    </div>
  );
};
