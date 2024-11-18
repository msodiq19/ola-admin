import Image from "next/image";
import React from "react";

export function AuthAside() {
  return (
    <div className="relative lg:w-[50%] hidden lg:block h-screen overflow-hidden">
      <Image
        src={"/images/portrait-happy-young-woman.png"}
        alt="happy-woman"
        height={500}
        width={442}
        className="w-full h-full -top-32 -left-16"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute top-[70%] left-[50%] -translate-x-[50%] w-2/3 mx-auto text-center text-white">
        <h2 className="font-semibold text-3xl mb-[10px]">
          Your Trusted Currency Exchange Hub!
        </h2>
        <p className="text-lg">
          Experience seamless and secure currency exchanges at the best rates.
        </p>
      </div>
    </div>
  );
}
