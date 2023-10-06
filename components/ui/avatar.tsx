import { cn } from "@/lib/utils";
import * as RadixAvatar from "@radix-ui/react-avatar";

export interface AvatarProps {
  src?: string;
  fallbackString?: string;
  className?: string;
}
export const Avatar = (props: AvatarProps) => {
  return (
    <RadixAvatar.Root
      className={cn([
        "relative mr-2 flex h-8 w-8 shrink-0 overflow-hidden rounded-daisy-badge",
        props.className,
      ])}
    >
      <RadixAvatar.Image
        src={props.src}
        className="aspect-square h-full w-full"
      />
      <RadixAvatar.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-base-content text-base-300">
        {props.fallbackString || "SD"}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};
