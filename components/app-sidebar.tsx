'use client'
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
import { BadgeCheck, Bell, CircleDollarSign, Home, Ratio, SquareKanban, User } from "lucide-react"
import { usePathname } from "next/navigation"


const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
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
      icon: Ratio,
      items: [],
    },
    {
      title: "Transactions",
      url: "#",
      icon: CircleDollarSign,
      items: [],
    },
    {
      title: "Analytic & Reporting",
      url: "#",
      icon: SquareKanban,
      items: [],
    },
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
      items: [],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader className="mx-8 mt-4">
        <Logo width={100} height={100} />
      </SidebarHeader>
      <SidebarContent className="mx-4 mt-8">
        {data.navMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={pathname === item.url}>
              <a href={item.url} className="pl-4">
                <item.icon />
                {item.title}
              </a>
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
