import { AuthAside } from '@/components/auth/auth-aside'
import React from 'react'


export default function AuthLayout({ children }: { children: React.ReactNode}){
  return (
    <div className='w-full lg:flex justify-between'>
        <div className='w-full lg:w-[50%]'>
            {children}
        </div>
        <AuthAside />
    </div>
  )
}