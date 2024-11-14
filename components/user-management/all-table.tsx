'use client'
import React, { useState } from 'react';
import { BadgeCheck, ChevronsUpDown, EllipsisVertical } from 'lucide-react';
import { UserInfo } from '@/lib/types';



interface TableProps {
  data: UserInfo[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [selecteduser, setSelecteduser] = useState<UserInfo | null>(null);

  console.log(selecteduser);

  const handleToggleMenu = (user: UserInfo) => {
    setSelecteduser(user);
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="bg-[#E0F2FE]">
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>User ID <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Name <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Email Address <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Verification <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Last Login <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Total Transactions <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Excrow Status <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Flagged <ChevronsUpDown size={16} /></span></th>
            <th className="py-2 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.userId}
              className={`border-b`}
            >
              <td className="px-4 py-2 text-left whitespace-nowrap">{user.userId}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{user.name}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{user.emailAddress}</td>
              <td
                className={`px-4 py-4 text-left flex items-center gap-1 ${
                  user.verification === 'Verified'
                    ? 'text-green-500'
                    : user.verification === 'Unverified'
                    ? 'text-red-500'
                    : 'text-yellow-500'
                } whitespace-nowrap`}
              >
                <BadgeCheck size={12} />
                {user.verification}
              </td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{user.lastLogin}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{user.totalTransactions}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{user.escrowStatus}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap"><span className='border rounded-[8px] px-3 py-2'>{user.flagged}</span></td>
              <td className="py-2 text-center">
                <button
                  className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                  onClick={() => handleToggleMenu(user)}
                >
                  <EllipsisVertical className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;