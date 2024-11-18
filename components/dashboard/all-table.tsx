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
    <div className="overflow-x-auto mt-5">
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-[#E0F2FE]">
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Transaction ID <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Transaction Type <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Date & Time <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Amount <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>UserName <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>VendorName <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-right"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Exc. Rate <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="px-3 py-2 text-left"><span className='flex items-center gap-1 text-[#525866] whitespace-nowrap'>Status <Image src={'/icons/sorting-icons.svg'} alt='sort' width={20} height={20} /></span></th>
            <th className="py-2 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <tr
              key={transaction.transactionId}
              className={`border-b text-[12px] text-[#0A0D14] font-normal`}
            >
              <td className="px-4 py-2 text-left whitespace-nowrap">{transaction.transactionId}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{transaction.transactionType}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{transaction.dateAndTime}</td>
              <td className="px-4 py-2 text-right whitespace-nowrap">{transaction.amount}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{transaction.userName}</td>
              <td className="px-4 py-2 text-left whitespace-nowrap">{transaction.vendorName}</td>
              <td className="px-4 py-2 text-right whitespace-nowrap">{transaction.exchangeRate}</td>
              <td
                className={`px-4 py-2 text-left ${
                  transaction.status === 'Completed'
                    ? 'text-green-500'
                    : transaction.status === 'Cancelled'
                    ? 'text-red-500'
                    : 'text-yellow-500'
                } whitespace-nowrap`}
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