import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-auto w-full min-w-0 rounded-md border px-3 py-3.5 text-base shadow-xs transition-[color,box-shadow] outline-none font-open-Sans",
        "bg-primary/30 text-foreground border-secondary placeholder:text-foreground/50 placeholder:capitalize",
        "selection:bg-primary selection:text-foreground",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "md:text-sm",
        "focus-visible:border-pinkish focus-visible:ring-pinkish/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-pinkish/20 aria-invalid:border-pinkish",
        className
      )}
      {...props}
    />
  );
}

export { Input };
