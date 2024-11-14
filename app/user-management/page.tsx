'use client'
import { AppSidebar } from "@/components/app-sidebar";
import Pagination from "@/components/pagination";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Table from "@/components/user-management/all-table";
import SearchFilter from "@/components/user-management/search-filter";
import { UserInfo } from "@/lib/types";
import React from "react";


const users: UserInfo[] = [
  {
    userId: 'USR1029',
    name: 'Sarah Brown',
    emailAddress: 'overriconnect@mail.com',
    verification: 'Unverified',
    lastLogin: '2024-10-01 14:23',
    totalTransactions: 15,
    escrowStatus: 'N250,000',
    flagged: 'Yes'
  },
  // Add more dummy data here
];

export default function Page() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 30;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data for the new page
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <SearchFilter />
          <Table data={users} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
