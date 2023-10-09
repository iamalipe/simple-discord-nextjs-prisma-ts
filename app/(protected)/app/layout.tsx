import { ModalProvider } from "@/components/provider/modal-provider";
import { ServersNav } from "@/components/servers-nav";

import { initialProfile } from "@/lib/initial-profile";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  await initialProfile();
  return (
    <>
      <ModalProvider />
      <div className="flex flex-1 overflow-hidden">
        <ServersNav />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
