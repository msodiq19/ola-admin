import { SignUpForm } from "@/components/auth/signup-form"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="h-screen overflow-hidden w-full items-center justify-center px-4">
        <div className="w-[90%] my-8 mx-auto flex justify-between items-center">
           <Logo /> 
           <p>Already have an account? <Link href='/auth/signin' className="underline text-blue-600">Sign In</Link></p>
        </div>
        <div className="w-[50%] mt-16 mx-auto">
            <SignUpForm />
        </div>
        <div className="w-[50%] mx-auto mt-6 flex gap-4">
            <span className="px-10 py-2 rounded-lg border border-stroke">
                <Image src={'/icons/apple-logo.svg'} alt="apple-logo" height={20} width={20} />
            </span>
            <span className="px-10 py-2 rounded-lg border border-stroke">
                <Image src={'/icons/google-logo.svg'} alt="apple-logo" height={20} width={20} />
            </span>
            <span className="px-10 py-2 rounded-lg border border-stroke">
                <Image src={'/icons/x-logo.svg'} alt="apple-logo" height={20} width={20} />
            </span>
        </div>
    </div>
  )
}
