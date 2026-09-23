"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Headset } from "lucide-react";

type AppTopHeaderProps = {
  isLoggedIn?: boolean;
  userName?: string | null;
  saldo?: number | null;
  role?: string | null;
};

export function AppTopHeader({ isLoggedIn = false, userName, saldo, role }: AppTopHeaderProps) {
  const pathname = usePathname() || "";
  const normalizedRole = String(role || "").trim().toLowerCase();
  const isRetailLoggedIn = isLoggedIn && (normalizedRole === "user" || normalizedRole === "agent" || normalizedRole === "master");
  const homeHref = isRetailLoggedIn ? "/user" : "/";
  void userName;
  void saldo;

  if (pathname === "/" || pathname === "/user") return null;

  return (
    <header className="brand-app-header sticky top-0 z-30 overflow-hidden bg-[#075dff] px-4 py-3 text-white shadow-[0_10px_28px_rgba(7,93,255,0.16)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#004ac6_0%,#0d73ff_58%,#0043bd_100%)]" />
      <div className="pointer-events-none absolute left-[52%] top-0 h-full w-24 rotate-12 bg-white/7" />

      <div className="relative flex h-12 items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center">
          <Link
            href={homeHref}
            prefetch={false}
            className="flex min-w-0 items-center gap-2"
            aria-label="DayaKlik"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center">
              <img src="/dayaklik-assets/02_logo_brand/simbol_logo_transparan.png" alt="" width={44} height={44} className="h-11 w-11 object-contain drop-shadow-[0_8px_16px_rgba(0,35,112,0.22)]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[22px] font-black leading-none">
                Daya<span className="text-[#dfff5d]">Klik</span>
              </span>
              <span className="mt-1 block truncate text-[9px] font-black uppercase leading-none text-white/82">
                Daya Untuk Harimu
              </span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-[12px] border border-white/35 bg-white/14 text-white shadow-sm transition hover:bg-white/20"
            aria-label="Hubungi bantuan via WhatsApp"
          >
            <Headset className="h-[18px] w-[18px]" strokeWidth={2.3} />
          </a>
        </div>
      </div>
    </header>
  );
}
