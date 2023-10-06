import * as React from "react";

import { cn } from "@/lib/utils";
import { useFormField } from "./form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { error } = useFormField();
    const errorMessage = error ? String(error?.message) : null;

    return (
      <input
        type={type}
        className={cn([
          "mt-1 w-full",
          type !== "file" && "daisy-input daisy-input-bordered",
          type === "file" && "daisy-file-input daisy-file-input-bordered",
          type !== "file" && errorMessage && "daisy-input-error",
          type === "file" && errorMessage && "daisy-file-input-error",
          className,
        ])}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
