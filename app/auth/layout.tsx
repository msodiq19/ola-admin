import { AuthAside } from '@/components/auth/auth-aside'
import React from 'react'


export default function AuthLayout({ children }: { children: React.ReactNode}){
  return (
    <div className='w-full flex'>
        <div className='w-1/2'>
            {children}
        </div>
        <AuthAside />
    </div>
  )
}