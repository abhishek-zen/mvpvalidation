"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { UserButton } from "@/components/header-auth";
import { usePathname } from "next/navigation";

export function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800 shadow-xs transition-all duration-200">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <button
            className={cn(
              "lg:hidden mr-1 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition",
              mobileOpen && "bg-neutral-100 dark:bg-neutral-800"
            )}
            aria-label="Open navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-xl font-bold tracking-tight bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              UIDashboard
            </span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-4">
          <Link
            href="/(dashboard)"
            className={cn(
              "text-base py-2 px-3 rounded transition-colors",
              pathname === "/(dashboard)" ? "bg-primary text-white" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/(dashboard)/policy-detail"
            className={cn(
              "text-base py-2 px-3 rounded transition-colors",
              pathname?.startsWith("/(dashboard)/policy-detail") ? "bg-secondary text-white" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            Policies
          </Link>
          <Link
            href="/instruments"
            className={cn(
              "text-base py-2 px-3 rounded transition-colors",
              pathname === "/instruments" ? "bg-accent text-accent-foreground" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            Instruments
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <UserButton />
        </div>
      </div>
      {/* Mobile nav sheet */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all duration-200",
          mobileOpen ? "block" : "hidden"
        )}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={cn(
          "fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 shadow-lg border-b border-neutral-200 dark:border-neutral-800 transition-transform duration-200 z-50 lg:hidden",
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        )}
        style={{ minHeight: "4.5rem" }}
      >
        <nav className="flex flex-col gap-2 p-4">
          <Link
            href="/(dashboard)"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "py-2 px-3 rounded",
              pathname === "/(dashboard)" ? "bg-primary text-white" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/(dashboard)/policy-detail"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "py-2 px-3 rounded",
              pathname?.startsWith("/(dashboard)/policy-detail") ? "bg-secondary text-white" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            Policies
          </Link>
          <Link
            href="/instruments"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "py-2 px-3 rounded",
              pathname === "/instruments" ? "bg-accent text-accent-foreground" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            Instruments
          </Link>
        </nav>
      </aside>
    </header>
  );
}
