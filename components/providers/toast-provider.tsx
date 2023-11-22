"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          backgroundColor: "hsl(var(--bc))",
          color: "hsl(var(--b3))",
          borderColor: "hsl(var(--b3))",
          borderRadius: "var(--rounded-box, 1rem)",
        },
        success: {
          iconTheme: {
            primary: "hsl(var(--suc) / 1)",
            secondary: "hsl(var(--su))",
          },
          style: {
            backgroundColor: "hsl(var(--su))",
            color: "hsl(var(--suc) / 1)",
            borderColor: "hsl(var(--sc) / 0.2)",
          },
        },
        error: {
          iconTheme: {
            primary: "hsl(var(--erc) / 1)",
            secondary: "hsl(var(--er))",
          },
          style: {
            backgroundColor: "hsl(var(--er))",
            color: "hsl(var(--erc) / 1)",
            borderColor: "hsl(var(--er) / 0.2)",
          },
        },
        loading: {
          iconTheme: {
            primary: "hsl(var(--inc) / 1)",
            secondary: "hsl(var(--in))",
          },
          style: {
            backgroundColor: "hsl(var(--in))",
            color: "hsl(var(--inc) / 1)",
            borderColor: "hsl(var(--in) / 0.2)",
          },
        },
      }}
    />
  );
};
