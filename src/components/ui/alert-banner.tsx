"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface AlertBannerProps {
  message: string | ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  icon?: ReactNode;
  className?: string;
}

const VARIANT_MAP = {
  info: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-600",
    color: "text-blue-700 dark:text-blue-100",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="10" cy="10" r="8" />
        <path d="M10 7v3m0 4h.01" />
      </svg>
    ),
  },
  success: {
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-700",
    color: "text-green-700 dark:text-green-100",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="10" cy="10" r="8" />
        <path d="M7 10.5l2 2 3.5-3.5" />
      </svg>
    ),
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-700",
    color: "text-amber-800 dark:text-amber-200",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="10" cy="10" r="8" />
        <path d="M10 7v3m0 4h.01" />
      </svg>
    ),
  },
  error: {
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-700",
    color: "text-red-700 dark:text-red-100",
    icon: (
      <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="10" cy="10" r="8" />
        <path d="M10 7v3m0 4h.01" />
      </svg>
    ),
  },
};

export function AlertBanner({
  message,
  variant = "info",
  icon,
  className,
}: AlertBannerProps) {
  const v = VARIANT_MAP[variant];
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg border shadow-sm",
        v.bg,
        v.border,
        v.color,
        className
      )}
      role="alert"
      aria-live="polite"
    >
      <span className="flex-shrink-0">{icon ?? v.icon}</span>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
