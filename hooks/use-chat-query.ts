import qs from "query-string";
import { useInfiniteQuery } from "@tanstack/react-query";

import { useSocket } from "@/components/providers/socket-provider";

interface ChatQueryProps {
  queryKey: string;
  apiUrl: string;
  paramKey: "channelId" | "asdas adasdas das";
  paramValue: string;
}

export const useChatQuery = ({
  queryKey,
  paramKey,
  paramValue,
  apiUrl,
}: ChatQueryProps) => {
  const { isConnected } = useSocket();

  const fetchMessages = async (pageParam = null) => {
    const url = qs.stringifyUrl(
      {
        url: apiUrl,
        // url: "/api/messages",
        query: {
          cursor: pageParam,
          [paramKey]: paramValue,
        },
      },
      { skipNull: true },
    );

    const res = await fetch(url);
    return res.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: [queryKey],
      queryFn: ({ pageParam }) => fetchMessages(pageParam),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      refetchInterval: isConnected ? false : 1000,
    });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};
