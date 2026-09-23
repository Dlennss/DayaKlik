"use client";

import Link from "next/link";
import { Bell, ChevronDown, ChevronRight, EyeOff, Plus, Send, UserRound, WalletCards } from "lucide-react";

const asset = (path: string) => `/dayaklik-assets/${path}`;

const services = [
  { label: "Pulsa", href: "/pulsa", icon: "06_layanan/icon_tile/pulsa_tile.png" },
  { label: "Paket Data", href: "/paket-data", icon: "06_layanan/icon_tile/paket_data_tile.png" },
  { label: "Token Listrik", href: "/listrik/token", icon: "06_layanan/icon_tile/token_listrik_tile.png" },
  { label: "E-Wallet", href: "/kategori", icon: "06_layanan/icon_tile/e_wallet_tile.png" },
  { label: "PPOB", href: "/kategori", icon: "06_layanan/icon_tile/ppob_tile.png" },
  { label: "Voucher Game", href: "/game", icon: "06_layanan/icon_tile/voucher_game_tile.png" },
  { label: "Telkom & Internet", href: "/internet-pascabayar", icon: "06_layanan/icon_tile/telkom_dan_internet_tile.png" },
  { label: "TV Berlangganan", href: "/tv", icon: "06_layanan/icon_tile/tv_berlangganan_tile.png" },
  { label: "PDAM", href: "/pdam", icon: "06_layanan/icon_tile/pdam_tile.png" },
  { label: "Lainnya", href: "/kategori", icon: "06_layanan/icon_tile/lainnya_tile.png" },
];

const promos = [
  { alt: "Cashback hingga 10 persen", src: "12_webp_ringan/kartu__cashback_hingga_10_persen.webp" },
  { alt: "Harga terbaik setiap hari", src: "12_webp_ringan/kartu__harga_terbaik_setiap_hari.webp" },
  { alt: "Transaksi lebih hemat", src: "12_webp_ringan/kartu__transaksi_lebih_hemat.webp" },
];

type DayaKlikAppHomeProps = {
  isLoggedIn?: boolean;
  userName?: string | null;
};

function SectionTitle({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-[22px] font-black leading-none text-[#061c52]">{title}</h2>
      <Link href={href} prefetch={false} className="inline-flex items-center gap-1 text-sm font-black text-[#075dff]">
        Lihat Semua
        <ChevronRight className="h-4 w-4" strokeWidth={3} />
      </Link>
    </div>
  );
}

export function DayaKlikAppHome({ isLoggedIn = false, userName }: DayaKlikAppHomeProps) {
  const accountHref = isLoggedIn ? "/user/account" : "/login";
  const displayName = userName?.trim() || "User";

  return (
    <div className="min-h-dvh bg-[#eef6ff] pb-30 text-[#071d55]">
      <section className="relative overflow-hidden bg-[#075af0] px-6 pb-28 pt-7 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(130deg,#064cc9_0%,#096eff_52%,#0050d4_100%)]" />
        <div className="absolute -right-28 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute left-1/3 top-0 h-full w-32 rotate-12 bg-white/8" />

        <div className="relative flex items-center justify-between gap-4">
          <Link href="/" prefetch={false} className="min-w-0">
            <img
              src={asset("12_webp_ringan/02_logo_brand__logo_lengkap_transparan.webp")}
              alt="DayaKlik"
              className="h-20 w-auto max-w-[220px] object-contain"
            />
          </Link>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/transaksi"
              prefetch={false}
              aria-label="Notifikasi"
              className="relative grid h-15 w-15 place-items-center rounded-[18px] border border-white/25 bg-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_14px_34px_rgba(0,29,111,0.24)] backdrop-blur"
            >
              <Bell className="h-7 w-7" strokeWidth={2.5} />
              <span className="absolute right-2 top-2 h-3 w-3 rounded-full bg-[#ff4561] ring-2 ring-[#2781ff]" />
            </Link>

            <Link href={accountHref} prefetch={false} className="flex items-center gap-2">
              <span className="grid h-15 w-15 place-items-center rounded-full bg-white/22 shadow-[inset_0_2px_5px_rgba(255,255,255,0.4)]">
                <UserRound className="h-9 w-9 text-white" strokeWidth={2.4} />
              </span>
              <span className="hidden min-w-0">
                <span className="block text-base font-semibold leading-none">Halo,</span>
                <span className="mt-2 flex items-center gap-2 text-2xl font-black leading-none">
                  {displayName}
                  <ChevronDown className="h-5 w-5" strokeWidth={3} />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="relative -mt-24 space-y-5 px-4">
        <section className="overflow-hidden rounded-[24px] border border-white/75 bg-white/95 p-5 shadow-[0_18px_42px_rgba(4,54,125,0.16)]">
          <div className="grid gap-5">
            <div>
              <div className="flex items-center gap-2 text-lg font-semibold text-[#15356f]">
                Saldo Utama
                <EyeOff className="h-5 w-5 text-[#7186ad]" strokeWidth={2.4} />
              </div>
              <div className="mt-3 text-[42px] font-black leading-none tracking-normal text-[#092763]">Rp 125.000</div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Link
                  href={isLoggedIn ? "/user/account/topup" : "/login"}
                  prefetch={false}
                  className="flex min-h-14 items-center justify-center gap-2 rounded-[14px] bg-[#075dff] px-3 text-sm font-black text-white shadow-[0_12px_22px_rgba(0,92,255,0.28)]"
                >
                  <Plus className="h-6 w-6 rounded-full bg-white text-[#075dff]" strokeWidth={3} />
                  Isi Saldo
                </Link>
                <Link
                  href={isLoggedIn ? "/user/transfer-bank" : "/login"}
                  prefetch={false}
                  className="flex min-h-14 items-center justify-center gap-2 rounded-[14px] border border-[#d8e6fb] bg-white px-3 text-sm font-black text-[#082966] shadow-[0_8px_20px_rgba(6,47,111,0.06)]"
                >
                  <Send className="h-5 w-5 text-[#075dff]" strokeWidth={2.6} />
                  Kirim
                </Link>
                <Link
                  href="/transaksi"
                  prefetch={false}
                  className="flex min-h-14 items-center justify-center gap-2 rounded-[14px] border border-[#d8e6fb] bg-white px-3 text-sm font-black text-[#082966] shadow-[0_8px_20px_rgba(6,47,111,0.06)]"
                >
                  <WalletCards className="h-5 w-5 text-[#075dff]" strokeWidth={2.5} />
                  Riwayat
                </Link>
              </div>
            </div>

            <div className="border-t border-[#d8e6fb] pt-4">
              <Link href={accountHref} prefetch={false} className="flex items-center justify-between gap-3 border-b border-[#e0ebfb] pb-4">
                <span className="flex items-center gap-3">
                  <img
                    src={asset("04_saldo_member/ikon_transparan/ikon_member_crown.png")}
                    alt=""
                    className="h-9 w-9 object-contain"
                  />
                  <span className="font-black text-[#071d55]">Member Reguler</span>
                </span>
                <ChevronRight className="h-5 w-5 text-[#075dff]" strokeWidth={3} />
              </Link>

              <Link
                href="/promo"
                prefetch={false}
                className="mt-4 flex min-h-22 items-center justify-between gap-4 rounded-[18px] bg-[#eaf3ff] p-4"
              >
                <img
                  src={asset("04_saldo_member/koin_poin.png")}
                  alt=""
                  className="h-16 w-16 shrink-0 object-contain"
                />
                <span className="min-w-0 text-sm font-bold leading-5 text-[#082966]">Kumpulkan poin dan dapatkan hadiah menarik!</span>
                <ChevronRight className="h-5 w-5 shrink-0 text-[#075dff]" strokeWidth={3} />
              </Link>
            </div>
          </div>
        </section>

        <Link
          href="/kategori"
          prefetch={false}
          className="block overflow-hidden rounded-[22px] shadow-[0_16px_34px_rgba(4,54,125,0.18)]"
          aria-label="Transaksi sekarang"
        >
          <img
            src={asset("12_webp_ringan/05_banner_utama__banner_utama.webp")}
            alt="Semua kebutuhan dalam satu aplikasi"
            className="block h-auto w-full"
          />
        </Link>

        <section className="rounded-[24px] border border-white/80 bg-white p-5 shadow-[0_14px_34px_rgba(11,48,99,0.09)]">
          <SectionTitle title="Semua Layanan" href="/kategori" />
          <div className="mt-6 grid grid-cols-5 gap-x-3 gap-y-7">
            {services.map((item) => (
              <Link key={item.label} href={item.href} prefetch={false} className="group flex min-w-0 flex-col items-center gap-2 text-center">
                <span className="grid aspect-square w-full max-w-[74px] place-items-center">
                  <img src={asset(item.icon)} alt="" className="h-full w-full object-contain transition group-hover:scale-105" />
                </span>
                <span className="min-h-10 text-[13px] font-bold leading-tight text-[#071d55]">{item.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[24px] border border-white/80 bg-white p-5 shadow-[0_14px_34px_rgba(11,48,99,0.09)]">
          <SectionTitle title="Promo Spesial" href="/promo" />
          <div className="mt-5 grid grid-cols-3 gap-3">
            {promos.map((item) => (
              <Link key={item.alt} href="/promo" prefetch={false} className="block overflow-hidden rounded-[16px]">
                <img src={asset(item.src)} alt={item.alt} className="h-auto w-full" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
