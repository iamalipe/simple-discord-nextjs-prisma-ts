# [simple-discord-nextjs-prisma-ts](https://simple-discord-nextjs-prisma-ts.vercel.app)

Simple Discord Clone. This not a production app, this only use for learning and testing.

## Hosted on [Vercel](https://vercel.com)

## Build using

- [NextJs](https://nextjs.org) and [React](https://react.dev)
- [Clerk](https://clerk.com) for authentication and user management.
- [Tailwindcss](https://tailwindcss.com) and [Daisyui](https://daisyui.com) for Style
- [Prisma](https://www.prisma.io) and [MongoDB](https://www.mongodb.com) for [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) and Database.
- [react-hook-form](https://www.npmjs.com/package/react-hook-form) and [Zod](https://zod.dev/) for Client Side Form Validation.
- [ImageKit](https://imagekit.io) for Upload Images and Attachments.
- [Zustand](https://github.com/pmndrs/zustand) for State Management.
<!-- - [Socket.io](https://socket.io) for Real-time messaging. -->
<!-- - [@tanstack/query](https://tanstack.com/query/latest) for Infinite loading for messages. -->
<!-- - [Livekit](https://livekit.io) for Audio and Video Calling and chat room. -->

### Prerequisites

Node version 18.x.x

### Setup Prisma

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
