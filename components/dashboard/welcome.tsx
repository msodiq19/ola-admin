import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-[30px] font-semibold text-[#344054]">
          Hello Sophia,
        </h2>
        <p className="text-lg text-[#667085] flex gap-2 items-center">
          Welcome to Your Admin Dashboard!
          <span>
            <Image
              src={"/celeb.svg"}
              alt="celeb"
              width={22.27}
              height={22.27}
            />
          </span>
        </p>
      </div>
      <span>
        <Image
          src={"/icons/notification-03.svg"}
          alt="notification"
          width={27}
          height={27}
        />
      </span>
    </div>
  );
}
