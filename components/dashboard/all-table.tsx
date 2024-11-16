'use client'
import React, { useState } from 'react';
import { EllipsisVertical } from 'lucide-react';
import { Transaction } from '@/lib/types';
import Image from 'next/image';



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
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>Transaction ID <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>Transaction Type <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>Date & Time <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866]'>Amount <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>UserName <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>VendorName <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866]'>Exc. Rate <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866]'>Status <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
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