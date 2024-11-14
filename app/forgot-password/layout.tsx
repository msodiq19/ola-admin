import { AuthAside } from '@/components/auth/auth-aside'
import React from 'react'


export default function ForgotLayout({ children }: { children: React.ReactNode}){
  return (
    <div className='w-full lg:flex'>
        <div className='w-full lg:w-1/2'>
            {children}
        </div>
        <AuthAside />
    </div>
  )
}