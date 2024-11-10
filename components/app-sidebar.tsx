import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Logo from "./logo"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      items: [],
    },
    {
      title: "User Management",
      url: "#",
      items: [],
    },
    {
      title: "Vendor Management",
      url: "#",
      items: [],
    },
    {
      title: "Transactions",
      url: "#",
      items: [],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="mx-4">
        <Logo width={100} height={100} />
      </SidebarHeader>
      <SidebarContent className="mx-4">
        {data.navMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
            <a href={item.url}>{item.title}</a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
