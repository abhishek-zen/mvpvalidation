"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface ActionPanelAction {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  disabled?: boolean;
}

export function ActionPanel({
  title,
  actions,
  className,
  children,
}: {
  title?: string;
  actions: ActionPanelAction[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={cn(
        "bg-white dark:bg-neutral-900 rounded-lg shadow p-4 flex flex-col gap-3 border border-neutral-200 dark:border-neutral-800",
        className
      )}
    >
      {title && (
        <h4 className="font-heading text-lg mb-1">{title}</h4>
      )}
      <div className="flex flex-wrap gap-2">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.onClick}
            disabled={action.disabled}
            className={cn(
              "inline-flex items-center gap-2 px-3 py-2 rounded-md font-medium bg-primary text-white shadow-sm transition hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
              action.disabled && "opacity-60 pointer-events-none"
            )}
            type="button"
          >
            {action.icon && <span>{action.icon}</span>}
            {action.label}
          </button>
        ))}
      </div>
      {children}
    </section>
  );
}
