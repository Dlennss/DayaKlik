type Props = { children: React.ReactNode };
export function BackgroundAuth({ children }: Props) {
  return <main className="brand-auth-shell flex min-h-svh items-start justify-center px-2 py-2 sm:items-center sm:px-4 sm:py-8"><div className="w-full max-w-[390px]">{children}</div></main>;
}
