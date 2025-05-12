"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function InsightPanel({
  insight,
  icon,
  author,
  date,
  className,
}: {
  insight: string | ReactNode;
  icon?: ReactNode;
  author?: string;
  date?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 dark:border-neutral-800 rounded-xl shadow-md p-5 flex flex-col gap-2 animate-fade-in",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-primary">{icon ?? (
          <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M10 4a6 6 0 1 1 0 12A6 6 0 0 1 10 4zm0 6v2m0 4h.01" />
          </svg>
        )}</span>
        <span className="font-heading font-bold text-lg text-primary">AI Insight</span>
      </div>
      <p className="text-neutral-700 dark:text-neutral-200">{insight}</p>
      {(author || date) && (
        <div className="mt-1 flex gap-2 items-center text-xs text-neutral-400">
          {author && <span>By {author}</span>}
          {date && <span>{date}</span>}
        </div>
      )}
    </div>
  );
}
