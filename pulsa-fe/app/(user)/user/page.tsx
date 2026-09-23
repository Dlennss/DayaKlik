import { getAppServerSession } from "@/lib/server-auth";
import type { UserSession } from "@/components/user/types";
import { UserAuthClientSync } from "@/components/user/UserAuthClientSync";
import { DayaKlikAppHome } from "@/components/guest/DayaKlikAppHome";

type SessionShape = {
  user?: UserSession;
  backendToken?: string;
};

export default async function UserAppHomePage() {
  const session = (await getAppServerSession()) as SessionShape | null;

  return (
    <main className="-mb-24 bg-sky-50">
      {session?.backendToken ? <UserAuthClientSync backendToken={session.backendToken} /> : null}
      <DayaKlikAppHome isLoggedIn />
    </main>
  );
}
