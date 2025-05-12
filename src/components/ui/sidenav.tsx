"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    name: "Overview",
    href: "/(dashboard)",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="12" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="12" width="7" height="7" rx="2" />
        <rect x="12" y="12" width="7" height="7" rx="2" />
      </svg>
    ),
  },
  {
    name: "Policies",
    href: "/(dashboard)/policy-detail",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M4 4h14v14H4z" />
        <path d="M8 2v6m0 0H2m6 0l6 6M10 18v-2.5" />
      </svg>
    ),
  },
  {
    name: "Insights",
    href: "/(dashboard)#insights",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="11" cy="11" r="8" />
        <path d="M11 7v4l2.5 2.5" />
      </svg>
    ),
  },
  {
    name: "Instruments",
    href: "/instruments",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="4" y="6" width="14" height="10" rx="3" />
        <path d="M7 6V4a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
];

export function SideNav() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 z-30 transition-all duration-200",
        collapsed ? "w-20" : "w-56"
      )}
      style={{ transitionProperty: "width" }}
    >
      <div className="flex flex-col h-full">
        <button
          className="self-end m-2 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed((v) => !v)}
        >
          {collapsed ? (
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path d="M8 5l4 5-4 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          ) : (
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path d="M12 5l-4 5 4 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          )}
        </button>
        <nav className="flex-1 flex flex-col gap-1 mt-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 py-2 px-4 rounded transition group",
                pathname === item.href
                  ? "bg-primary text-white shadow-md"
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
              tabIndex={0}
            >
              <span className={cn(
                "transition",
                collapsed && "mx-auto"
              )}>
                {item.icon}
              </span>
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          ))}
        </nav>
        <div className="mt-auto mb-4 flex justify-center">
          <a
            href="https://alchemi.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-primary transition"
          >
            Powered by Alchemi
          </a>
        </div>
      </div>
    </aside>
  );
}
