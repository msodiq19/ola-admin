
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import Image from 'next/image'


export default function Stats() {
  return (
    <div className="grid auto-rows-min gap-5 md:grid-cols-3 mt-7">
            <div className="flex flex-col justify-between gap-4 bg-[#0BA5EC] text-white rounded-[26px] py-4 px-4">
              <div className="flex justify-between items-center">
                <h4 className='font-semibold text-[16px]'>Escrow Balance</h4>
                <span className="bg-[#7CD4FD] rounded-md p-1">
                  <Image src="/icons/clock-01.svg" alt="clock" width={18.31} height={18.31} />
                </span>
              </div>
              <h2 className="text-4xl font-semibold">N2,000,000</h2>
              <div className="flex justify-between items-center">
                <span className="bg-white text-black rounded-full">
                <Select>
                  <SelectTrigger className="h-8 border-none outline-none rounded-full font-semibold text-[12px]">
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NGN">Nigerian Naira (NGN)</SelectItem>
                    <SelectItem value="USD">United State Dollar (USD)</SelectItem>
                  </SelectContent>
                </Select>
                </span>
                <span className="bg-[#36BFFA] rounded-full px-3 py-1 cursor-pointer font-semibold text-[12px]">View More</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 bg-[#F5FBFF] border-[#E0F2FE] rounded-[26px] py-4 px-4">
              <div className="flex justify-between">
                <h4 className='font-semibold text-[16px]'>Total Users</h4>
                <span className="bg-[#E0F2FE] p-1 rounded-md"><Image src="/icons/clock-01.svg" alt="clock" width={18.31} height={18.31} /></span>
              </div>
              <h2 className="text-4xl font-semibold">200,000</h2>
              <div className="flex justify-between items-center">
                <span className="rounded-full">
                <Select>
                  <SelectTrigger className="h-8 border-none outline-none rounded-full bg-transparent font-semibold text-[12px]">
                    <SelectValue placeholder="Weekly" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                </span>
                <span className="bg-[#E0F2FE] rounded-full px-3 py-1 cursor-pointer font-semibold text-[12px]">View More</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 bg-[#F5FBFF] rounded-[26px] py-4 px-4">
              <div className="flex justify-between">
                <h4 className='font-semibold text-[16px]'>Total Vendors</h4>
                <span className="bg-[#E0F2FE] p-1 rounded-md"><Image src="/icons/clock-01.svg" alt="clock" width={18.31} height={18.31} /></span>
              </div>
              <h2 className="text-4xl font-semibold">200,000</h2>
              <div className="flex justify-between items-center">
                <span className="rounded-full">
                <Select>
                  <SelectTrigger className="h-8 border-none rounded-full bg-transparent font-semibold text-[12px]">
                    <SelectValue placeholder="Weekly" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                </span>
                <span className="bg-[#E0F2FE] rounded-full px-3 py-1 cursor-pointer text-[12px] font-semibold">View More</span>
              </div>
            </div>
          </div>
  )
}