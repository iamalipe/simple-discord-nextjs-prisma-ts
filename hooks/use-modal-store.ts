// import { Channel, ChannelType, Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createServer";
//  | "invite" | "editServer" | "members" | "createChannel" | "leaveServer" | "deleteServer" | "deleteChannel" | "editChannel" | "messageFile" | "deleteMessage";

export interface ModalDataInterface {
  value: string;
  // server?: Server;
  // channel?: Channel;
  // channelType?: ChannelType;
  // apiUrl?: string;
  // query?: Record<string, any>;
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
