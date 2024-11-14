import { SignUpForm } from "@/components/auth/signup-form"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="h-screen overflow-hidden w-full items-center justify-center px-4">
        <div className="w-[90%] my-8 mx-auto flex justify-between items-center">
           <Logo height={60} width={60} /> 
           <p>Already have an account? <Link href='/signin' className="underline text-blue-600">Sign In</Link></p>
        </div>
        <div className="flex items-center flex-col text-center mt-12">
            <Image src={'/custom-login-icon.svg'} alt="profile" height={50} width={50} />
            <div>
                <h2 className="text-[#0A0D14] font-semibold text-xl">Create a new account</h2>
                <p className="text-[#525866] font-medium text-sm">Enter your details to register</p>
            </div>
        </div>
        <div className="w-[90%] md:w-[50%] mx-auto mt-6">
            <SignUpForm />
        </div>
        <div className="w-[90%] md:w-[50%] mx-auto mt-6 flex gap-4">
            <span className="flex-1 inline-flex justify-center py-1 rounded-lg border border-stroke">
                <Image src={'/icons/apple-logo.svg'} alt="apple-logo" height={20} width={20} />
            </span>
            <span className="flex-1 inline-flex justify-center py-1 rounded-lg border border-stroke">
                <Image src={'/icons/google-logo.svg'} alt="apple-logo" height={20} width={20} />
            </span>
            <span className="flex-1 inline-flex justify-center py-1 rounded-lg border border-stroke">
                <Image src={'/icons/x-logo.svg'} alt="apple-logo" height={20} width={20} />
            </span>
        </div>
    </div>
  )
}
