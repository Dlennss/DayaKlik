export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-[#12316b] text-slate-950">
      {children}
    </div>
  );
}
