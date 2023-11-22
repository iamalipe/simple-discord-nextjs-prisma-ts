import { Hash } from "lucide-react";

interface MessageWelcomeProps {
  name: string;
}

export const MessageWelcome = ({ name }: MessageWelcomeProps) => {
  return (
    <div className="mb-4 space-y-2 px-4">
      <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-zinc-500 dark:bg-zinc-700">
        <Hash className="h-12 w-12 text-white" />
      </div>
      <p className="text-xl font-bold md:text-3xl">{`Welcome to #{name}`}</p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {`This is the start of the #${name} channel.`}
      </p>
    </div>
  );
};
