import { getAppServerSession } from "@/lib/server-auth";
import { getUserProfile } from "@/lib/api.auth";
import type { UserSession } from "@/components/user/types";
import { UserAuthClientSync } from "@/components/user/UserAuthClientSync";
import { DayaKlikAppHome } from "@/components/guest/DayaKlikAppHome";

type SessionShape = {
  user?: UserSession;
  backendToken?: string;
};

export default async function UserAppHomePage() {
  const session = (await getAppServerSession()) as SessionShape | null;
  const profile = session?.backendToken ? await getUserProfile(session.backendToken).catch(() => null) : null;
  const userName = profile?.nama || session?.user?.name || session?.user?.email || null;

  return (
    <main className="-mb-24 bg-sky-50">
      {session?.backendToken ? <UserAuthClientSync backendToken={session.backendToken} /> : null}
      <DayaKlikAppHome isLoggedIn userName={userName} saldo={Number(profile?.saldo || 0)} />
    </main>
  );
}
