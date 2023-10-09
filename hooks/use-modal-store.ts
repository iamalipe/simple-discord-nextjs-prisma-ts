// import { Channel, ChannelType, Server } from "@prisma/client";
import { Category } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createServer" | "createChannel";
//  | "invite" | "editServer" | "members" | "createChannel" | "leaveServer" | "deleteServer" | "deleteChannel" | "editChannel" | "messageFile" | "deleteMessage";

export interface ModalDataInterface {
  category?: Category;
}

export interface ModalStore {
  type: ModalType | null;
  data?: ModalDataInterface;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalDataInterface) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: undefined,
  isOpen: false,
  onOpen: (type, data) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false, data: undefined }),
}));
