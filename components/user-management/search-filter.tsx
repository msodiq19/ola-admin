import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ListFilter, Search } from 'lucide-react'


export default function SearchFilter() {
  return (
    <div className='flex justify-between items-end'>
        <div>
            <h2 className='text-xl font-semibold'>User Management</h2>
            <p className='text-[#525866] text-sm'>View, manage and control user accounts on the platform.</p>
        </div>
        <div className="flex gap-2 items-center">
            <div className='flex items-center text-[#868C98] border px-2 rounded-lg'>
              <Search  color='#868C98' />
              <Input type='search' placeholder='Search...' className='border-none outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0' />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F5FBFF] rounded-[7.83px] cursor-pointer">
                <span><ListFilter /></span>
                <span>Filter</span>
            </div>
            <Button className='bg-[#0BA5EC] rounded-[7.83px]'>See All</Button>
        </div>
    </div>
  )
}