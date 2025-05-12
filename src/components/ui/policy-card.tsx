"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface PolicyCardProps {
  title: string;
  description: string;
  tags?: string[];
  status?: "active" | "inactive" | "pending";
  children?: React.ReactNode;
}

export function PolicyCard({
  title,
  description,
  tags,
  status,
  children,
  className,
}: PolicyCardProps & { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl shadow-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-3 transition hover:shadow-lg hover:-translate-y-1 duration-150",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <h3 className="font-heading text-xl font-semibold">{title}</h3>
        {status && (
          <Badge
            variant={
              status === "active"
                ? "success"
                : status === "inactive"
                ? "destructive"
                : "secondary"
            }
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        )}
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
