import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ListFilter } from 'lucide-react'


export default function SearchFilter() {
  return (
    <div className='flex justify-between items-end'>
        <div>
            <h2 className='text-xl font-semibold'>Recent Transactions</h2>
            <p className='text-[#525866] text-sm'>Organize and access your payment cards.</p>
        </div>
        <div className="flex gap-2 items-center">
            <Input type='search' placeholder='Search...' />
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F5FBFF] rounded-[7.83px] cursor-pointer">
                <span><ListFilter /></span>
                <span>Filter</span>
            </div>
            <Button className='bg-[#0BA5EC] rounded-[7.83px]'>See All</Button>
        </div>
    </div>
  )
}