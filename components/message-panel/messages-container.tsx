import { db } from "@/lib/db";

export interface MessagesContainerProps {
  channelId: string;
}
export const MessagesContainer = async (props: MessagesContainerProps) => {
  const { channelId } = props;

  const messages = await db.messages.findMany({
    where: {
      channelId: channelId,
    },
  });

  return (
    <div className="flex-1 bg-base-100">
      {messages.map((e, index) => (
        <div key={index}>{e.text}</div>
      ))}
    </div>
  );
};
