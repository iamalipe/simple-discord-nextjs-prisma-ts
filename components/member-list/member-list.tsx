import { ServerWithCategoriesAndChannel } from "@/types";
import { MemberListItem } from ".";
import { ScrollArea } from "../ui/scroll-area";
import { Profile } from "@prisma/client";

export interface MemberListProps {
  server: ServerWithCategoriesAndChannel | null;
  myProfile: Profile;
}
export const MemberList = (props: MemberListProps) => {
  const members = props.server?.members || [];

  return (
    <div className="flex w-[240px] flex-none flex-col overflow-hidden bg-base-200">
      <div className="mb-1 h-12 flex-none border-b border-b-base-content/50 p-2">
        {/* <button className="h-full w-full rounded-daisy-btn bg-base-content/25 text-center text-sm text-base-content hover:bg-base-content/40">
          Find or start a conversation
        </button> */}
      </div>
      <ScrollArea className="w-full flex-1">
        {members.map((e, index) => (
          <MemberListItem myId={props.myProfile.id} key={index} data={e} />
        ))}
      </ScrollArea>
    </div>
  );
};
