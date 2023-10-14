import ProfileBar from "@/components/profile-bar/profile-bar";
import { DirectMessagesItem } from "./direct-messages-item";
import axios from "axios";

export const DirectMessages = async () => {
  // const onStartConversation = async () => {
  //   console.log("onStartConversation");
  //   const res = await axios.post("/api/test");
  //   console.log(res.data);
  // };

  return (
    <div className="flex h-full w-[280px] flex-none flex-col overflow-hidden border-x border-l-base-100 border-r-base-300 bg-base-200">
      <div className="mb-1 h-12 border-b border-b-base-content/50 p-2">
        <button
          // onClick={onStartConversation}
          className="h-full w-full rounded-daisy-btn bg-base-content/25 text-center text-sm text-base-content hover:bg-base-content/40"
        >
          Find or start a conversation
        </button>
      </div>
      {/* <Separator className="flex-none bg-[#1e1f22]" /> */}
      <span className="flex-none px-3 py-1 text-xs font-bold">
        DIRECT MESSAGES
      </span>
      {/* <ScrollArea className="flex-1 w-full"> */}
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      <DirectMessagesItem />
      {/* </ScrollArea> */}
      <ProfileBar />
    </div>
  );
};

export default DirectMessages;
