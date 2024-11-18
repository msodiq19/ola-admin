'use client'
import React, { useState } from 'react';
import { BadgeCheck, EllipsisVertical } from 'lucide-react';
import { UserInfo } from '@/lib/types';
import Image from 'next/image';



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
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="bg-[#E0F2FE]">
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>User ID <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Name <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Email Address <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Verification <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Last Login <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Total Transactions <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Excrow Status <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Flagged <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="py-2 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.userId}
              className={`border-b text-[#0A0D14] text-[12px] font-medium`}
            >
              <td className="px-4 py-2 text-left whitespace-nowrap">{user.userId}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{user.name}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{user.emailAddress}</td>
              <td
                className={`px-4 py-4 text-left whitespace-nowrap`}
              >
                <span className={`flex items-center gap-1 py-1 px-2 rounded-sm ${
                  user.verification === 'Verified'
                    ? 'text-[#039855] bg-[#F6FEF9]'
                    : user.verification === 'Unverified'
                    ? 'text-[#C1861E] bg-[#FFF7EA]'
                    : 'text-yellow-500'
                }`}>
                  <BadgeCheck size={12} />
                  {user.verification}
                </span>
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