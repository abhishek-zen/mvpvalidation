"use client";

import { cn } from "@/lib/utils";

export interface TimelineEvent {
  title: string;
  description?: string;
  time?: string;
  icon?: React.ReactNode;
  color?: string;
}

export function Timeline({
  events,
  className,
}: {
  events: TimelineEvent[];
  className?: string;
}) {
  return (
    <ul className={cn("relative pl-6", className)}>
      {events.map((event, idx) => (
        <li key={idx} className="mb-8 last:mb-0 flex items-start relative">
          <span
            className={cn(
              "absolute -left-6 flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white dark:ring-neutral-900",
              event.color ? event.color : "bg-primary"
            )}
            style={{
              backgroundColor: event.color,
            }}
            aria-hidden
          >
            {event.icon ? (
              <span className="text-white text-xs">{event.icon}</span>
            ) : (
              <span className="block w-2.5 h-2.5 bg-white dark:bg-neutral-900 rounded-full"></span>
            )}
          </span>
          <div>
            <h4 className="font-semibold text-base text-neutral-900 dark:text-neutral-100">
              {event.title}
              {event.time && (
                <span className="ml-3 text-xs font-normal text-neutral-400">{event.time}</span>
              )}
            </h4>
            {event.description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">{event.description}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
