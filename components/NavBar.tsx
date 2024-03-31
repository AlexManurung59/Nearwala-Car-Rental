import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
function NavBar() {
  return (
    <div className="hidden md:flex items-center justify-between p-5 shadow-sm border-b-[1px]">
      <Image src="/logo.png" alt="logo" width={150} height={100} />
      <div className="flex gap-10">
        <h2 className="hover:bg-green-600 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Home
        </h2>
        <h2 className="hover:bg-green-600 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-green-600 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          About Us
        </h2>
        <h2 className="hover:bg-green-600 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Testimonial
        </h2>
        <h2 className="hover:bg-green-600 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Contact Us
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default NavBar;
