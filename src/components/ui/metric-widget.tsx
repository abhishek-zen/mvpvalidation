"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function MetricWidget({
  label,
  value,
  icon,
  trend,
  trendDirection,
  className,
}: {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
  className?: string;
}) {
  const trendColor =
    trendDirection === "up"
      ? "text-green-600"
      : trendDirection === "down"
      ? "text-red-600"
      : "text-neutral-500";
  return (
    <div
      className={cn(
        "rounded-lg shadow border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 flex flex-col gap-2 min-w-[140px] transition hover:shadow-lg",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="text-2xl">{icon}</span>}
        <span className="text-xs font-medium text-neutral-400">{label}</span>
      </div>
      <div className="flex items-end gap-2">
        <span className="font-heading text-2xl font-bold">{value}</span>
        {trend && (
          <span className={cn("flex items-center gap-1 text-xs font-semibold", trendColor)}>
            {trendDirection === "up" && (
              <svg width={14} height={14} className="inline" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M7 11V3M7 3l-4 4M7 3l4 4" />
              </svg>
            )}
            {trendDirection === "down" && (
              <svg width={14} height={14} className="inline" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M7 3v8M7 11l-4-4M7 11l4-4" />
              </svg>
            )}
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
