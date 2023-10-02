"use client";

export const Footer = () => {
  return (
    <>
      <footer className="flex w-full flex-none flex-col items-center justify-between overflow-auto border-t border-t-neutral bg-base-100 px-2 py-0.5 text-center text-xs md:flex-row md:px-12">
        <a
          href="https://simple-discord-nextjs-prisma-ts.vercel.app"
          target="_blank"
          className="daisy-link-accent cursor-pointer font-bold hover:underline"
        >
          Simple Discord
        </a>
        <span className="font-medium">
          This is a preview build. Go to{" "}
          <a
            href="https://github.com/iamalipe/simple-discord-nextjs-prisma-ts"
            target="_blank"
            className="daisy-link-accent cursor-pointer font-bold hover:underline"
          >
            Github
          </a>{" "}
          to learn more.
        </span>
      </footer>
    </>
  );
};
