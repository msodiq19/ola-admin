
import { Bell } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


export default function Welcome() {
  return (
    <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[#344054]">Hello Sophia,</h2>
              <p className="text-lg text-[#667085] flex gap-2 items-center">
                Welcome to Your Admin Dashboard!
                <span>
                  <Image
                    src={"/celeb.svg"}
                    alt="celeb"
                    width={22}
                    height={22}
                  />
                </span>
              </p>
            </div>
            <span>
              <Bell />
            </span>
          </div>
  )
}