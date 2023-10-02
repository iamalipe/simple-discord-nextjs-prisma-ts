"use client";

import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";

export interface RedixProviderProps {
  children: React.ReactNode;
}
export const RedixProvider = ({ children }: RedixProviderProps) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};
