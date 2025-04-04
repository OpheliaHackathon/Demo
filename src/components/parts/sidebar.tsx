import { Link } from "@tanstack/react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "🏠 Dashboard",
      url: "/dashboard",
    },
    {
      title: "📊 Classifica",
      url: "/leaderboard",
    },
    {
      title: "🧩 Installa Ora",
      url: "/extension",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="font-semibold text-3xl p-6 border"
            >
              <Link to="/" className="flex items-center">
                <img src="logo.png" alt="Logo" height={30} width={30} />
                CarbonQuest
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            username: "Demo",
            email: "demo@lorenzoc.dev",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
