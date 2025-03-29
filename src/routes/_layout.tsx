import { Outlet, createFileRoute } from "@tanstack/react-router";

import Footer from "@/components/parts/footer";
import { AppSidebar } from "@/components/parts/sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const Route = createFileRoute("/_layout")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Button
        asChild
        variant="secondary"
        className="fixed bottom-4 left-4 w-10 h-10"
      >
        <SidebarTrigger />
      </Button>
      
      <div className="flex flex-col w-full h-screen">
        <Outlet />
        <Footer />
      </div>
    </SidebarProvider>
  );
}
