import { MessageInput, MessagesContainer } from ".";

interface MessagePanelProps {
  channelId: string;
}
export const MessagePanel = async (props: MessagePanelProps) => {
  const { channelId } = props;

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-1 h-12 flex-none border-b border-b-base-content/50 p-2">
        {/* <button className="h-full w-full rounded-daisy-btn bg-base-content/25 text-center text-sm text-base-content hover:bg-base-content/40">
          Find or start a conversation
        </button> */}
      </div>
      <MessagesContainer channelId={channelId} />
      <MessageInput channelId={channelId} />
    </div>
  );
};
