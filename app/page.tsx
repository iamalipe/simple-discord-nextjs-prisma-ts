import Link from "next/link";

const LandingPage = async () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold">Simple Discord Clone</h1>
      <p className="mt-4">
        This not a production app, this only use for learning and testing.
      </p>
      <ul className="mt-4 list-disc">
        <li className="list-none font-bold">Build using</li>
        <li>
          <a href="https://nextjs.org" className="daisy-link">
            NextJs
          </a>{" "}
          and{" "}
          <a href="https://react.dev" className="daisy-link">
            React
          </a>
        </li>
        <li>
          <a href="https://clerk.com" className="daisy-link">
            Clerk
          </a>{" "}
          for authentication and user management.
        </li>
        <li>
          <a href="https://tailwindcss.com" className="daisy-link">
            Tailwindcss
          </a>{" "}
          and{" "}
          <a href="https://daisyui.com" className="daisy-link">
            Daisyui
          </a>{" "}
          for Style
        </li>
        <li>
          <a href="https://www.prisma.io" className="daisy-link">
            Prisma
          </a>{" "}
          and{" "}
          <a href="https://www.mongodb.com" className="daisy-link">
            MongoDB
          </a>{" "}
          for ORM and Database.
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/react-hook-form"
            className="daisy-link"
          >
            react-hook-form
          </a>{" "}
          and{" "}
          <a href="https://zod.dev" className="daisy-link">
            Zod
          </a>{" "}
          for Client Side Form Validation.
        </li>
        <li>
          <a href="https://imagekit.io" className="daisy-link">
            ImageKit
          </a>{" "}
          for Upload Images and Attachments.
        </li>
        <li>
          <a href="https://github.com/pmndrs/zustand" className="daisy-link">
            Zustand
          </a>{" "}
          for State Management
        </li>
      </ul>
      <br />
      <span>
        Go to the
        <Link className="daisy-link-primary daisy-link" href="/app">
          {" "}
          App
        </Link>
      </span>
    </main>
  );
};

export default LandingPage;
