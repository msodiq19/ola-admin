import { AppSidebar } from "@/components/app-sidebar";
import Table from "@/components/dashboard/all-table";
import SearchFilter from "@/components/dashboard/search-filter";
import Stats from "@/components/dashboard/stats";
import Welcome from "@/components/dashboard/welcome";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Transaction } from "@/lib/types";


const transactions: Transaction[] = [
  {
    transactionId: 'TXN1001',
    transactionType: 'Currency Exchange',
    dateAndTime: '2024-10-01 14:23',
    amount: '$1,000 USD',
    userName: 'Sarah Brown',
    vendorName: 'Vendor XYZ',
    exchangeRate: '750 NGN/USD',
    status: 'Completed',
  },
  // Add more transactions here
];


export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-4 ml-6 mr-12">
          <Welcome />
          <Stats />
          <div className="mt-6">
            <SearchFilter />
            <Table data={transactions} />
            {/* Table */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
