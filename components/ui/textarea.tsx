import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-16 w-full rounded-md border bg-primary/30 text-foreground border-secondary px-3 py-2 text-base shadow-xs transition-[color,box-shadow] placeholder:text-foreground/50 outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-pinkish focus-visible:ring-pinkish/50 focus-visible:ring-[3px]",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
