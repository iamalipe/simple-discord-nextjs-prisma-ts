import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";
import { Server, Member, Category, Profile, Channel } from "@prisma/client";

export type ServerWithCategoriesAndChannel = Server & {
  members: (Member & { profile: Profile })[];
  categories: (Category & { channel: Channel[] })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};