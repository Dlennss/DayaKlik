"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScanLine } from "lucide-react";

function asset(path: string) {
  return `/dayaklik-assets/${path}`;
}

function navClass(active: boolean, extra = "") {
  return active
    ? `flex min-w-0 flex-col items-center gap-1.5 py-1 text-[#075dff]! visited:text-[#075dff]! ${extra}`
    : `flex min-w-0 flex-col items-center gap-1.5 py-1 text-[#193969]! transition visited:text-[#193969]! hover:text-[#075dff]! ${extra}`;
}

const textClass = "text-[12px] font-semibold leading-none";

type GuestBottomNavProps = {
  isLoggedIn?: boolean;
};

export function GuestBottomNav({ isLoggedIn = false }: GuestBottomNavProps) {
  const pathname = usePathname() || "";
  const homeActive = pathname === "/";
  const historyActive = pathname.startsWith("/transaksi");
  const promoActive = pathname.startsWith("/promo");
  const accountHref = isLoggedIn ? "/user/account" : "/login";
  const accountActive = isLoggedIn
    ? pathname.startsWith("/user/account")
    : pathname.startsWith("/login");

  return (
    <section className="brand-bottom-nav fixed bottom-3 left-1/2 z-[90] w-full max-w-[390px] -translate-x-1/2 overflow-visible px-4">
      <div className="rounded-[24px] border border-white/85 bg-white/96 px-3 py-2 shadow-[0_-6px_32px_rgba(6,48,111,0.14),0_18px_38px_rgba(6,48,111,0.12)] backdrop-blur-xl">
      <div className="grid grid-cols-5 items-end pb-[calc(0.35rem+env(safe-area-inset-bottom))] pt-2">
        <Link href="/" prefetch={false} className={navClass(homeActive)}>
          <span className={homeActive ? "grid h-12 min-w-14 place-items-center rounded-[14px] bg-[#e9f4ff]" : "grid h-12 min-w-14 place-items-center"}>
            <img src={asset("12_webp_ringan/11_siap_pakai_256__beranda_nav_256.webp")} alt="" className="h-[34px] w-[34px] object-contain" />
          </span>
          <span className={textClass}>Beranda</span>
        </Link>

        <Link href="/transaksi" prefetch={false} className={navClass(historyActive)}>
          <span className="grid h-12 min-w-14 place-items-center">
            <img src={asset("12_webp_ringan/11_siap_pakai_256__transaksi_nav_256.webp")} alt="" className="h-8 w-8 object-contain" />
          </span>
          <span className={textClass}>Transaksi</span>
        </Link>

        <Link href="/kategori" prefetch={false} className={navClass(false, "-mt-9")}>
          <span className="grid h-18 w-18 place-items-center rounded-full bg-[#0874ff] text-white shadow-[0_14px_28px_rgba(8,116,255,0.34)] ring-6 ring-[#e8f4ff]">
            <ScanLine className="h-8 w-8" strokeWidth={2.5} />
          </span>
          <span className="text-[12px] font-semibold leading-none text-[#193969]">Scan</span>
        </Link>

        <Link href="/promo" prefetch={false} className={navClass(promoActive)}>
          <span className="grid h-12 min-w-14 place-items-center">
            <img src={asset("12_webp_ringan/11_siap_pakai_256__promo_nav_256.webp")} alt="" className="h-8 w-8 object-contain" />
          </span>
          <span className={textClass}>Promo</span>
        </Link>

        <Link href={accountHref} prefetch={false} className={navClass(accountActive)}>
          <span className="grid h-12 min-w-14 place-items-center">
            <img src={asset("12_webp_ringan/11_siap_pakai_256__akun_nav_256.webp")} alt="" className="h-8 w-8 object-contain" />
          </span>
          <span className={textClass}>Akun</span>
        </Link>
      </div>
      </div>
    </section>
  );
}
