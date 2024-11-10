import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Bell, Clock } from "lucide-react";
import Image from "next/image";

// const DashboardSkeleton = () => {
//   return (
//     <div className="flex flex-1 flex-col gap-4 p-4">
//       <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//         <div className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
//         <div className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
//         <div className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
//       </div>
//       <div className="min-h-[100vh] flex-1 rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50" />
//     </div>
//   );
// };

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">Hello Sophia,</h2>
              <p className="text-lg text-[#667085] flex gap-2 items-center">
                Welcome to Your Admin Dashboard!
                <span>
                  <Image
                    src={"/celeb.svg"}
                    alt="celeb"
                    width={20}
                    height={20}
                  />
                </span>
              </p>
            </div>
            <span>
              <Bell />
            </span>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3 mt-6">
            <div className="flex flex-col gap-4 bg-[#0BA5EC] text-white rounded-[26px] py-4 px-4">
              <div className="flex justify-between">
                <h4>Escrow Balance</h4>
                <span><Clock /></span>
              </div>
              <h2>N2,000,000</h2>
              <div className="flex justify-between items-center">
                <span className="bg-white text-black px-3 py-1 rounded-full">Select Currency</span>
                <span className="bg-[#36BFFA] rounded-full px-3 py-1">View More</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#F5FBFF] rounded-[26px] py-4 px-4">
              <div className="flex justify-between">
                <h4>Escrow Balance</h4>
                <span><Clock /></span>
              </div>
              <h2>N2,000,000</h2>
              <div className="flex justify-between items-center">
                <span className="rounded-full">Weekly</span>
                <span className="bg-[#E0F2FE] rounded-full px-3 py-1">View More</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#F5FBFF] rounded-[26px] py-4 px-4">
              <div className="flex justify-between">
                <h4>Escrow Balance</h4>
                <span><Clock /></span>
              </div>
              <h2>N2,000,000</h2>
              <div className="flex justify-between items-center">
                <span className="rounded-full">Weekly</span>
                <span className="bg-[#E0F2FE] rounded-full px-3 py-1">View More</span>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
