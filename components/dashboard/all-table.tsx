'use client'
import React, { useState } from 'react';
import { ChevronsUpDown, EllipsisVertical } from 'lucide-react';
import { Transaction } from '@/lib/types';



interface TableProps {
  data: Transaction[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  console.log(selectedTransaction);

  const handleToggleMenu = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-[#E0F2FE]">
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>Transaction ID <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>Transaction Type <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>Date & Time <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866]'>Amount <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>UserName <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>VendorName <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866]'>Exc. Rate <ChevronsUpDown size={16} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>Status <ChevronsUpDown size={16} /></span></th>
            <th className="py-2 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <tr
              key={transaction.transactionId}
              className={`border-b`}
            >
              <td className="px-4 py-2 text-left">{transaction.transactionId}</td>
              <td className="px-4 py-2 text-left">{transaction.transactionType}</td>
              <td className="px-4 py-2 text-left">{transaction.dateAndTime}</td>
              <td className="px-4 py-2 text-right">{transaction.amount}</td>
              <td className="px-4 py-2 text-left">{transaction.userName}</td>
              <td className="px-4 py-2 text-left">{transaction.vendorName}</td>
              <td className="px-4 py-2 text-right">{transaction.exchangeRate}</td>
              <td
                className={`px-4 py-2 text-left ${
                  transaction.status === 'Completed'
                    ? 'text-green-500'
                    : transaction.status === 'Cancelled'
                    ? 'text-red-500'
                    : 'text-yellow-500'
                }`}
              >
                {transaction.status}
              </td>
              <td className="py-2 text-center">
                <button
                  className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                  onClick={() => handleToggleMenu(transaction)}
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