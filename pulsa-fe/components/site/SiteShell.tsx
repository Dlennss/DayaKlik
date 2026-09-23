"use client";

import { usePathname } from "next/navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  const isHome = pathname === "/";

  return (
    <div className={isHome ? "box-border min-h-dvh" : "box-border min-h-[calc(100dvh-65px)] pb-24"}>
      {children}
    </div>
  );
}
