"use client";

import Link from "next/link";

const dashboardImage = "/dayaklik-assets/01_bagian_utama/dashboard_lengkap.png";

const hotspots = [
  { label: "Isi Saldo", href: "/login", className: "left-[6%] top-[18.5%] h-[4.7%] w-[19%]" },
  { label: "Kirim", href: "/login", className: "left-[27%] top-[18.5%] h-[4.7%] w-[15%]" },
  { label: "Riwayat Saldo", href: "/transaksi", className: "left-[44%] top-[18.5%] h-[4.7%] w-[16%]" },
  { label: "Member", href: "/login", className: "left-[65%] top-[10.6%] h-[5.8%] w-[29%]" },
  { label: "Poin", href: "/promo", className: "left-[65%] top-[16.2%] h-[7.4%] w-[29%]" },
  { label: "Transaksi Sekarang", href: "/kategori", className: "left-[3%] top-[25.5%] h-[19.5%] w-[94%]" },
  { label: "Lihat Semua Layanan", href: "/kategori", className: "left-[77%] top-[48.1%] h-[3.5%] w-[18%]" },
  { label: "Pulsa", href: "/pulsa", className: "left-[5%] top-[51%] h-[9.5%] w-[15%]" },
  { label: "Paket Data", href: "/paket-data", className: "left-[24%] top-[51%] h-[9.5%] w-[15%]" },
  { label: "Token Listrik", href: "/listrik/token", className: "left-[42%] top-[51%] h-[9.5%] w-[15%]" },
  { label: "E-Wallet", href: "/ewallet", className: "left-[61%] top-[51%] h-[9.5%] w-[15%]" },
  { label: "PPOB", href: "/kategori", className: "left-[80%] top-[51%] h-[9.5%] w-[15%]" },
  { label: "Voucher Game", href: "/game", className: "left-[5%] top-[62%] h-[9.5%] w-[15%]" },
  { label: "Telkom Internet", href: "/internet-pascabayar", className: "left-[24%] top-[62%] h-[9.5%] w-[15%]" },
  { label: "TV Berlangganan", href: "/tv", className: "left-[42%] top-[62%] h-[9.5%] w-[15%]" },
  { label: "PDAM", href: "/pdam", className: "left-[61%] top-[62%] h-[9.5%] w-[15%]" },
  { label: "Lainnya", href: "/kategori", className: "left-[80%] top-[62%] h-[9.5%] w-[15%]" },
  { label: "Lihat Semua Promo", href: "/promo", className: "left-[77%] top-[75.6%] h-[3.5%] w-[18%]" },
  { label: "Promo Cashback", href: "/promo", className: "left-[4%] top-[78.5%] h-[10.5%] w-[31%]" },
  { label: "Promo Harga Terbaik", href: "/promo", className: "left-[36%] top-[78.5%] h-[10.5%] w-[29%]" },
  { label: "Promo Hemat", href: "/promo", className: "left-[67%] top-[78.5%] h-[10.5%] w-[29%]" },
  { label: "Beranda", href: "/", className: "left-[5%] top-[91.5%] h-[7%] w-[17%]" },
  { label: "Transaksi", href: "/transaksi", className: "left-[25%] top-[91.5%] h-[7%] w-[17%]" },
  { label: "Scan", href: "/kategori", className: "left-[43%] top-[89.5%] h-[9%] w-[15%]" },
  { label: "Promo", href: "/promo", className: "left-[63%] top-[91.5%] h-[7%] w-[17%]" },
  { label: "Akun", href: "/login", className: "left-[80%] top-[91.5%] h-[7%] w-[17%]" },
];

type DayaKlikAppHomeProps = {
  isLoggedIn?: boolean;
};

export function DayaKlikAppHome({ isLoggedIn = false }: DayaKlikAppHomeProps) {
  return (
    <div className="min-h-dvh bg-[#eef6ff] text-[#071d55]">
      <div className="mx-auto w-full max-w-[512px]">
        <div className="relative">
          <img
            src={dashboardImage}
            alt="DayaKlik"
            className="block h-auto w-full select-none"
            draggable={false}
          />
          {hotspots.map((item) => {
            const href = item.href === "/login" && isLoggedIn ? "/user/account" : item.href;
            return (
              <Link
                key={`${item.label}-${item.href}`}
                href={href}
                prefetch={false}
                aria-label={item.label}
                className={`absolute rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 ${item.className}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
