"use client";

export const Footer = () => {
  return (
    <>
      <footer className="w-full bg-base-100 border-t border-t-neutral flex-none overflow-auto text-xs flex flex-col md:flex-row items-center justify-between px-2 py-0.5 md:px-12 text-center">
        <a
          href="https://simple-discord-nextjs-prisma-ts.vercel.app"
          target="_blank"
          className="font-bold cursor-pointer hover:underline daisy-link-accent"
        >
          Simple Discord
        </a>
        <span className="font-medium">
          This is a preview build. Go to{" "}
          <a
            href="https://github.com/iamalipe/simple-discord-nextjs-prisma-ts"
            target="_blank"
            className="font-bold cursor-pointer hover:underline daisy-link-accent"
          >
            Github
          </a>{" "}
          to learn more.
        </span>
      </footer>
    </>
  );
};
