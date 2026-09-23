"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, Home, QrCode, Tag, UserRound } from "lucide-react";

function navClass(active: boolean, extra = "") {
  return active
    ? `flex min-w-0 flex-col items-center gap-1.5 py-1 text-[#075dff]! visited:text-[#075dff]! ${extra}`
    : `flex min-w-0 flex-col items-center gap-1.5 py-1 text-[#193969]! transition visited:text-[#193969]! hover:text-[#075dff]! ${extra}`;
}

const iconWrapClass = "grid h-10 min-w-12 place-items-center rounded-[13px]";
const iconClass = "h-[22px] w-[22px]";
const textClass = "text-[12px] font-bold leading-none";

type GuestBottomNavProps = {
  isLoggedIn?: boolean;
};

export function GuestBottomNav({ isLoggedIn = false }: GuestBottomNavProps) {
  const pathname = usePathname() || "";
  const homeActive = pathname === "/";
  const historyActive = pathname.startsWith("/transaksi");
  const scanActive = pathname.startsWith("/kategori");
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
          <span className={homeActive ? `${iconWrapClass} bg-[#e9f4ff]` : iconWrapClass}>
            <Home className={iconClass} strokeWidth={homeActive ? 2.5 : 2} />
          </span>
          <span className={textClass}>Beranda</span>
        </Link>

        <Link href="/transaksi" prefetch={false} className={navClass(historyActive)}>
          <span className={historyActive ? `${iconWrapClass} bg-[#e9f4ff]` : iconWrapClass}>
            <ClipboardList className={iconClass} strokeWidth={historyActive ? 2.5 : 2} />
          </span>
          <span className={textClass}>Transaksi</span>
        </Link>

        <Link href="/kategori" prefetch={false} className={navClass(scanActive)}>
          <span className={scanActive ? `${iconWrapClass} bg-[#e9f4ff]` : iconWrapClass}>
            <QrCode className={iconClass} strokeWidth={scanActive ? 2.5 : 2} />
          </span>
          <span className={textClass}>Scan</span>
        </Link>

        <Link href="/promo" prefetch={false} className={navClass(promoActive)}>
          <span className={promoActive ? `${iconWrapClass} bg-[#e9f4ff]` : iconWrapClass}>
            <Tag className={iconClass} strokeWidth={promoActive ? 2.5 : 2} />
          </span>
          <span className={textClass}>Promo</span>
        </Link>

        <Link href={accountHref} prefetch={false} className={navClass(accountActive)}>
          <span className={accountActive ? `${iconWrapClass} bg-[#e9f4ff]` : iconWrapClass}>
            <UserRound className={iconClass} strokeWidth={accountActive ? 2.5 : 2} />
          </span>
          <span className={textClass}>Akun</span>
        </Link>
      </div>
      </div>
    </section>
  );
}
