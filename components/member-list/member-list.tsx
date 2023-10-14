import { MemberListItem } from ".";
import { ScrollArea } from "../ui/scroll-area";

export const MemberList = () => {
  return (
    <div className="flex w-[240px] flex-none flex-col bg-base-200">
      <div className="mb-1 h-12 flex-none border-b border-b-base-content/50 p-2">
        {/* <button className="h-full w-full rounded-daisy-btn bg-base-content/25 text-center text-sm text-base-content hover:bg-base-content/40">
          Find or start a conversation
        </button> */}
      </div>
      <ScrollArea className="flex flex-1 flex-col">
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
      </ScrollArea>
    </div>
  );
};
