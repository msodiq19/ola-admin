import { ForgotForm } from "@/components/auth/forgot-form"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="h-screen overflow-hidden w-full items-center justify-center px-4">
        <div className="w-[90%] my-8 mx-auto flex justify-between items-center">
           <Logo height={60} width={60} /> 
           <p>Don&apos;t have an account? <Link href='/auth/signup' className="underline text-blue-600">Sign Up</Link></p>
        </div>
        <div className="flex items-center flex-col text-center mt-12">
            <Image src={'/custom-login-icon.svg'} alt="profile" height={50} width={50} />
            <div>
                <h2 className="text-[#0A0D14] font-semibold text-3xl flex items-center">Forgot Password?</h2>
                <p className="text-[#525866] font-medium text-sm">Enter email associated with your account</p>
            </div>
        </div>
        <div className="w-[80%] md:w-[50%] mx-auto mt-6">
            <ForgotForm />
        </div>
    </div>
  )
}
