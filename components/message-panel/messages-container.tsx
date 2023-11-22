"use client";

import { useSocket } from "@/components/providers";
import { useChatQuery } from "@/hooks/use-chat-query";
import { useChatScroll } from "@/hooks/use-chat-scroll";
import { useChatSocket } from "@/hooks/use-chat-socket";
import { Loader2, ServerCrash } from "lucide-react";
import { ElementRef, useEffect, useRef } from "react";

export interface MessagesContainerProps {
  channelId: string;
}
export const MessagesContainer = (props: MessagesContainerProps) => {
  const { channelId } = props;

  const queryKey = `channel:${channelId}`;
  const addKey = `channel:${channelId}:messages`;
  const updateKey = `channel:${channelId}:messages:update`;
  const apiUrl = `/api/messages`;
  const paramKey = `channelId`;
  const paramValue = `channel:${channelId}:messages:update`;

  // const { socket } = useSocket();

  const chatRef = useRef<ElementRef<"div">>(null);
  const bottomRef = useRef<ElementRef<"div">>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useChatQuery({
      queryKey,
      apiUrl,
      paramKey,
      paramValue,
    });
  useChatSocket({ queryKey, addKey, updateKey });
  useChatScroll({
    chatRef,
    bottomRef,
    loadMore: fetchNextPage,
    shouldLoadMore: !isFetchingNextPage && !!hasNextPage,
    count: data?.pages?.[0]?.items?.length ?? 0,
  });

  if (status === "pending") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <Loader2 className="my-4 h-7 w-7 animate-spin text-zinc-500" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Loading messages...
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <ServerCrash className="my-4 h-7 w-7 text-zinc-500" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Something went wrong!
        </p>
      </div>
    );
  }

  console.log("MessagesContainer", data);

  return (
    <div className="flex-1 bg-base-100">
      {/* {data?.map((e, index) => (
        <div key={index}>{e.text}</div>
      ))} */}
    </div>
  );
};
