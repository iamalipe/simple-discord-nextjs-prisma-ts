"use client";

import { useSocket } from "@/components/providers";
import { useChatQuery } from "@/hooks/use-chat-query";
import { useChatScroll } from "@/hooks/use-chat-scroll";
import { useChatSocket } from "@/hooks/use-chat-socket";
import { Loader2, ServerCrash } from "lucide-react";
import { ElementRef, Fragment, useEffect, useRef } from "react";
import { MessageWelcome } from "./message-welcome";
import { Member, Messages, Profile } from "@prisma/client";

export interface MessagesContainerProps {
  channelId: string;
}

type MessageWithMemberWithProfile = Messages & {
  member: Member & {
    profile: Profile;
  };
};

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
      apiUrl: `/api/messages`,
      paramKey: `channelId`,
      paramValue: channelId,
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

  console.log("MessagesContainer", data?.pages?.map((group, i) => group));

  // return (
  //   <div className="flex-1 bg-base-100">
  //     {/* {data?.map((e, index) => (
  //       <div key={index}>{e.text}</div>
  //     ))} */}
  //   </div>
  // );

  return (
    <div ref={chatRef} className="flex flex-1 flex-col overflow-y-auto py-4">
      {!hasNextPage && <div className="flex-1" />}
      {!hasNextPage && <MessageWelcome name={"sddaadsdsdd asds as asd asd"} />}
      {hasNextPage && (
        <div className="flex justify-center">
          {isFetchingNextPage ? (
            <Loader2 className="my-4 h-6 w-6 animate-spin text-zinc-500" />
          ) : (
            <button
              onClick={() => fetchNextPage()}
              className="my-4 text-xs text-zinc-500 transition hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
            >
              Load previous messages
            </button>
          )}
        </div>
      )}
      <div className="mt-auto flex flex-col-reverse">
        {data?.pages?.map((group, i) => (
          <Fragment key={i}>
            {group?.messages?.map((message: MessageWithMemberWithProfile) => (
              // <ChatItem
              //   key={message.id}
              //   id={message.id}
              //   currentMember={member}
              //   member={message.member}
              //   content={message.content}
              //   fileUrl={message.fileUrl}
              //   deleted={message.deleted}
              //   timestamp={format(new Date(message.createdAt), DATE_FORMAT)}
              //   isUpdated={message.updatedAt !== message.createdAt}
              //   socketUrl={socketUrl}
              //   socketQuery={socketQuery}
              // />
              <div key={message.id}>{message.text}</div>
            ))}
          </Fragment>
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
  );
};
