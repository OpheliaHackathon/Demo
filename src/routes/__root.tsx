import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen w-screen">
      <Outlet />
    </div>
  ),
});
