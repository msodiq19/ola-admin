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
import { BadgeCheck, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"


const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: '/icons/transaction.svg',
      items: [],
    },
    {
      title: "User Management",
      url: "/user-management",
      icon: '/icons/user.svg',
      items: [],
    },
    {
      title: "Vendor Management",
      url: "#",
      icon: '/icons/cleaning-bucket.svg',
      items: [],
    },
    {
      title: "Transactions",
      url: "#",
      icon: '/icons/transaction.svg',
      items: [],
    },
    {
      title: "Analytic & Reporting",
      url: "#",
      icon: '/icons/analytics-01.svg',
      items: [],
    },
    {
      title: "Notifications",
      url: "#",
      icon: '/icons/notification-03.svg',
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
          <SidebarMenuItem key={item.title} className="flex items-center">
            {pathname === item.url && <div className="w-[4px] h-[20px] bg-[#0BA5EC] rounded-tr-[4px] rounded-br-[4px]"></div>}
            <SidebarMenuButton asChild isActive={pathname === item.url}>
              <a href={item.url} className="ml-4 felx justify-between">
                <span className="flex items-center gap-2">
                  <Image src={item.icon} alt={item.title} height={20} width={20} />
                  {item.title}
                </span>
                {pathname === item.url && <ChevronRight color="#525866" />}
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
