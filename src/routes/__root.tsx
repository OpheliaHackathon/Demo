import { DemoBar } from "@/components/parts/demo-bar";
import { Capacitor } from "@capacitor/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const navigate = Route.useNavigate();
  if (Capacitor.getPlatform() !== "web" && location.pathname === "/") {
    navigate({
      to: "/dashboard",
    });
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <DemoBar />

      <div className="flex h-screen">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
