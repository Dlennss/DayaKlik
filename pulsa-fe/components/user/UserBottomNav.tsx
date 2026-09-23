"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { History, House, UserRound, WalletCards } from "lucide-react";

function navClass(active: boolean) {
  return active
    ? "flex min-w-0 flex-col items-center gap-1 py-1 text-[#075dff]! visited:text-[#075dff]!"
    : "flex min-w-0 flex-col items-center gap-1 py-1 text-[#8da0bd]! transition visited:text-[#8da0bd]! hover:text-[#12316b]!";
}

function isActivePath(pathname: string, basePath: string) {
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
}

const iconClass = "h-[22px] w-[22px]";
const textClass = "text-[12px] font-bold leading-none";

export function UserBottomNav() {
  const pathname = usePathname() || "";
  const trxActive = isActivePath(pathname, "/user/transaksi");
  const saldoActive = isActivePath(pathname, "/user/saldo") || isActivePath(pathname, "/user/account/topup") || isActivePath(pathname, "/user/account/mutasi");
  const accountActive = isActivePath(pathname, "/user/account") && !saldoActive;
  const homeActive = isActivePath(pathname, "/user") && !trxActive && !accountActive && !saldoActive;

  return (
    <section className="brand-bottom-nav fixed bottom-0 left-1/2 z-[90] w-full max-w-[390px] -translate-x-1/2 overflow-hidden rounded-t-[24px] border-t border-[#12316b]/10 bg-white/96 shadow-[0_-14px_34px_rgba(6,78,59,0.10)] backdrop-blur-xl">
      <div className="grid grid-cols-4 px-5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-3">
        <Link href="/user" className={navClass(homeActive)}>
          <span className={homeActive ? "grid h-10 min-w-14 place-items-center rounded-[13px] bg-[#eaf3ff]" : "grid h-10 min-w-14 place-items-center"}>
            <House className={iconClass} strokeWidth={homeActive ? 2.4 : 1.9} />
          </span>
          <span className={textClass}>Beranda</span>
        </Link>

        <Link href="/user/transaksi" className={navClass(trxActive)}>
          <span className={trxActive ? "grid h-10 min-w-14 place-items-center rounded-[13px] bg-[#eaf3ff]" : "grid h-10 min-w-14 place-items-center"}>
            <History className={iconClass} strokeWidth={trxActive ? 2.4 : 1.9} />
          </span>
          <span className={textClass}>Riwayat</span>
        </Link>

        <Link href="/user/saldo" className={navClass(saldoActive)}>
          <span className={saldoActive ? "grid h-10 min-w-14 place-items-center rounded-[13px] bg-[#eaf3ff]" : "grid h-10 min-w-14 place-items-center"}>
            <WalletCards className={iconClass} strokeWidth={saldoActive ? 2.4 : 1.9} />
          </span>
          <span className={textClass}>Saldo</span>
        </Link>

        <Link href="/user/account" className={navClass(accountActive)}>
          <span className={accountActive ? "grid h-10 min-w-14 place-items-center rounded-[13px] bg-[#eaf3ff]" : "grid h-10 min-w-14 place-items-center"}>
            <UserRound className={iconClass} strokeWidth={accountActive ? 2.4 : 1.9} />
          </span>
          <span className={textClass}>Akun</span>
        </Link>
      </div>
    </section>
  );
}
