"use client";

import Link from "next/link";
import { Bell, ChevronDown, ChevronRight, EyeOff, History, Home, Plus, ReceiptText, Send, UserRound, WalletCards } from "lucide-react";

const asset = (path: string) => `/dayaklik-assets/${path}`;

const services = [
  { label: "Pulsa", href: "/pulsa", icon: "06_layanan/icon_tile/pulsa_tile.png" },
  { label: "Paket Data", href: "/paket-data", icon: "06_layanan/icon_tile/paket_data_tile.png" },
  { label: "Token Listrik", href: "/listrik/token", icon: "06_layanan/icon_tile/token_listrik_tile.png" },
  { label: "E-Wallet", href: "/ewallet", icon: "06_layanan/icon_tile/e_wallet_tile.png" },
  { label: "PPOB", href: "/kategori", icon: "06_layanan/icon_tile/ppob_tile.png" },
  { label: "Voucher Game", href: "/game", icon: "06_layanan/icon_tile/voucher_game_tile.png" },
  { label: "Telkom & Internet", href: "/internet-pascabayar", icon: "06_layanan/icon_tile/telkom_dan_internet_tile.png" },
  { label: "TV Berlangganan", href: "/tv", icon: "06_layanan/icon_tile/tv_berlangganan_tile.png" },
  { label: "PDAM", href: "/pdam", icon: "06_layanan/icon_tile/pdam_tile.png" },
  { label: "Lainnya", href: "/kategori", icon: "06_layanan/icon_tile/lainnya_tile.png" },
];

const promos = [
  { label: "Cashback hingga 10%", href: "/promo", image: "07_promo/kartu/cashback_hingga_10_persen.png" },
  { label: "Harga terbaik setiap hari", href: "/promo", image: "07_promo/kartu/harga_terbaik_setiap_hari.png" },
  { label: "Transaksi lebih hemat", href: "/promo", image: "07_promo/kartu/transaksi_lebih_hemat.png" },
];

const navItems = [
  { label: "Beranda", href: "/", icon: Home, active: true },
  { label: "Riwayat", href: "/transaksi", icon: History },
  { label: "Saldo", href: "/login", icon: WalletCards },
  { label: "Akun", href: "/login", icon: UserRound },
];

type DayaKlikAppHomeProps = {
  isLoggedIn?: boolean;
  userName?: string | null;
  saldo?: number | null;
};

function getHref(href: string, isLoggedIn: boolean) {
  if (!isLoggedIn) return href;

  const userRoutes: Record<string, string> = {
    "/login": "/user/account",
    "/transaksi": "/user/transaksi",
    "/user/saldo": "/user/saldo",
    "/kategori": "/user/kategori",
    "/pulsa": "/user/pulsa",
    "/paket-data": "/user/paket-data",
    "/listrik/token": "/user/listrik/token",
    "/ewallet": "/user/ewallet",
    "/promo": "/user",
  };

  return userRoutes[href] || href;
}

function SectionHeading({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-[17px] font-black leading-none text-[#071d55]">{title}</h2>
      <Link href={href} prefetch={false} className="inline-flex items-center gap-1 text-[12px] font-black text-[#075dff]">
        Lihat Semua
        <ChevronRight className="h-3.5 w-3.5" strokeWidth={3} />
      </Link>
    </div>
  );
}

function formatIDR(value: number) {
  return `Rp ${Math.max(0, Math.floor(value || 0)).toLocaleString("id-ID")}`;
}

function displayName(name?: string | null) {
  const clean = String(name || "").trim();
  if (!clean) return "Akun";
  return clean.split(/\s+/)[0] || "Akun";
}

export function DayaKlikAppHome({ isLoggedIn = false, userName, saldo = 0 }: DayaKlikAppHomeProps) {
  const shownName = displayName(userName);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-[#eef6ff] text-[#071d55]">
      <div className="mx-auto min-h-dvh w-full max-w-[390px] overflow-hidden bg-[#eef6ff] shadow-[0_18px_70px_rgba(7,29,85,0.10)] sm:my-3 sm:rounded-[28px]">
        <header className="relative mx-4 mt-4 overflow-hidden rounded-[18px] bg-[#075dff] px-4 pb-4 pt-4 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#004ac6_0%,#0d73ff_54%,#0043bd_100%)]" />
          <div className="absolute left-[50%] top-0 h-full w-20 rotate-12 bg-white/7" />

          <div className="relative flex items-center justify-between gap-3">
            <Link href={isLoggedIn ? "/user" : "/"} prefetch={false} aria-label="DayaKlik" className="flex min-w-0 flex-1 items-center gap-2">
              <span className="grid h-11 w-11 shrink-0 place-items-center">
                <img src={asset("02_logo_brand/simbol_logo_transparan.png")} alt="" className="h-11 w-11 object-contain drop-shadow-[0_8px_16px_rgba(0,35,112,0.22)]" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[22px] font-black leading-none text-white">
                  Daya<span className="text-[#dfff5d]">Klik</span>
                </span>
                <span className="mt-1 block truncate text-[9px] font-black uppercase leading-none text-white/82">
                  Daya Untuk Harimu
                </span>
              </span>
            </Link>

            <div className="flex shrink-0 items-center gap-2">
              {isLoggedIn ? (
                <Link
                  href={getHref("/transaksi", isLoggedIn)}
                  prefetch={false}
                  aria-label="Notifikasi"
                  className="relative grid h-10 w-10 place-items-center rounded-[13px] border border-white/25 bg-white/14 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]"
                >
                  <Bell className="h-5 w-5" strokeWidth={2.4} />
                  <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-[#ff4966] ring-2 ring-[#1c79ff]" />
                </Link>
              ) : null}
              {isLoggedIn ? (
                <Link
                  href="/user/account"
                  prefetch={false}
                  className="inline-flex h-9 max-w-[98px] items-center justify-center gap-1 rounded-[12px] bg-white/14 px-3 text-[13px] font-black leading-none text-white ring-1 ring-white/20"
                >
                  <span className="truncate">{shownName}</span>
                  <ChevronDown className="h-3.5 w-3.5 shrink-0" strokeWidth={3} />
                </Link>
              ) : (
                <Link
                  href="/login"
                  prefetch={false}
                  className="grid h-9 min-w-[76px] place-items-center rounded-[12px] border border-white/40 bg-white/16 px-4 text-sm font-black leading-none text-white shadow-[0_8px_18px_rgba(0,42,130,0.12)]"
                >
                  <span>Masuk</span>
                </Link>
              )}
            </div>
          </div>
        </header>

        <main className="space-y-3 px-4 pb-28 pt-3">
          {isLoggedIn ? (
            <section className="rounded-[18px] border border-white/80 bg-white/96 p-4 shadow-[0_12px_34px_rgba(7,65,150,0.13)]">
              <div className="flex items-center gap-2 text-[14px] font-semibold text-[#1b3f7d]">
                Saldo Utama
                <EyeOff className="h-4 w-4 text-[#7d91b6]" strokeWidth={2.4} />
              </div>
              <div className="mt-2 text-[34px] font-black leading-none tracking-normal text-[#071d55]">{formatIDR(Number(saldo || 0))}</div>

              <div className="mt-5 grid grid-cols-3 gap-2.5">
                <Link
                  href="/user/account/topup"
                  prefetch={false}
                  className="flex h-11 items-center justify-center gap-1.5 rounded-[13px] bg-[#075dff] px-2 text-[12px] font-black text-white shadow-[0_10px_18px_rgba(0,93,255,0.25)]"
                >
                  <Plus className="h-5 w-5 rounded-full bg-white text-[#075dff]" strokeWidth={3} />
                  Isi Saldo
                </Link>
                <Link
                  href="/user/saldo/kirim"
                  prefetch={false}
                  className="flex h-11 items-center justify-center gap-1.5 rounded-[13px] border border-[#d8e6fb] bg-white px-2 text-[12px] font-black text-[#082966] shadow-[0_8px_16px_rgba(6,47,111,0.06)]"
                >
                  <Send className="h-[18px] w-[18px] text-[#075dff]" strokeWidth={2.6} />
                  Kirim
                </Link>
                <Link
                  href="/user/transaksi"
                  prefetch={false}
                  className="flex h-11 items-center justify-center gap-1.5 rounded-[13px] border border-[#d8e6fb] bg-white px-2 text-[12px] font-black text-[#082966] shadow-[0_8px_16px_rgba(6,47,111,0.06)]"
                >
                  <ReceiptText className="h-[18px] w-[18px] text-[#075dff]" strokeWidth={2.5} />
                  Riwayat
                </Link>
              </div>
            </section>
          ) : null}

          <Link
            href={getHref("/kategori", isLoggedIn)}
            prefetch={false}
            className="block overflow-hidden rounded-[18px] shadow-[0_12px_28px_rgba(4,54,125,0.16)] ring-1 ring-white/80"
            aria-label="Transaksi sekarang"
          >
            <img src={asset("05_banner_utama/banner_utama.png")} alt="Semua kebutuhan dalam satu aplikasi" className="block h-auto w-full" />
          </Link>

          <section className="rounded-[18px] border border-white/80 bg-white p-4 shadow-[0_10px_28px_rgba(11,48,99,0.08)]">
            <SectionHeading title="Semua Layanan" href={getHref("/kategori", isLoggedIn)} />
            <div className="mt-4 grid grid-cols-5 gap-x-2 gap-y-4">
              {services.map((item) => (
                <Link key={item.label} href={getHref(item.href, isLoggedIn)} prefetch={false} className="group flex min-w-0 flex-col items-center gap-1.5 text-center">
                  <img src={asset(item.icon)} alt="" className="aspect-square w-full max-w-[54px] object-contain transition group-hover:scale-105" />
                  <span className="min-h-[28px] text-[10.5px] font-bold leading-tight text-[#071d55]">{item.label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-[18px] border border-white/80 bg-white p-4 shadow-[0_10px_28px_rgba(11,48,99,0.08)]">
            <SectionHeading title="Promo Spesial" href={getHref("/promo", isLoggedIn)} />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {promos.map((item) => (
                <Link key={item.label} href={getHref(item.href, isLoggedIn)} prefetch={false} className="block overflow-hidden rounded-[12px]">
                  <img src={asset(item.image)} alt={item.label} className="block h-auto w-full" />
                </Link>
              ))}
            </div>
          </section>
        </main>

        <nav className="fixed bottom-0 left-1/2 z-20 w-full max-w-[390px] -translate-x-1/2 overflow-hidden rounded-t-[24px] border-t border-[#12316b]/10 bg-white/96 shadow-[0_-14px_34px_rgba(7,93,255,0.10)] backdrop-blur-xl">
          <div className="grid grid-cols-4 px-5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const href = item.label === "Saldo" ? (isLoggedIn ? "/user/saldo" : "/login") : getHref(item.href, isLoggedIn);
                return (
                  <Link
                    key={item.label}
                    href={href}
                    prefetch={false}
                    aria-label={item.label}
                    className={item.active ? "flex min-w-0 flex-col items-center gap-1 py-1 text-[#075dff]" : "flex min-w-0 flex-col items-center gap-1 py-1 text-[#8da0bd]"}
                  >
                    <span
                      className={
                        item.active
                          ? "grid h-10 min-w-14 place-items-center rounded-[13px] bg-[#eaf3ff] text-[#075dff]"
                          : "grid h-10 min-w-14 place-items-center text-[#8da0bd]"
                      }
                    >
                      <Icon className="h-[22px] w-[22px]" strokeWidth={item.active ? 2.4 : 1.9} />
                    </span>
                    <span className={item.active ? "text-[12px] font-black leading-none text-[#075dff]" : "text-[12px] font-bold leading-none text-[#8da0bd]"}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
          </div>
        </nav>
      </div>
    </div>
  );
}
