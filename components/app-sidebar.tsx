import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Logo from "./logo"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { BadgeCheck, Home, User } from "lucide-react"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Home,
      items: [],
    },
    {
      title: "User Management",
      url: "#",
      icon: User,
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
      <SidebarHeader className="mx-8 mt-4">
        <Logo width={100} height={100} />
      </SidebarHeader>
      <SidebarContent className="mx-4 mt-8">
        {data.navMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
            <a href={item.url} className="pl-4">{item.title}</a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="pl-4 py-8">
              <a href="#">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex gap-2 items-center">
                    <h4>Sophia Williams</h4>
                    <BadgeCheck fill="blue" color="white" />
                  </div>
                  <p className="text-[#525866]">sophia@gmail.com</p>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
