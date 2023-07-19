"use client";

import { useNavbarContext } from "@/contexts";
import Avatar from "./Avatar";
import Button from "./Button";
import Navbar from "./Navbar";

export default function Header() {
  const { showNavbar } = useNavbarContext();

  return (
    <>
      <header className="w-full py-4 px-5 bg-gray-100 border-b-2 border-gray-300 fixed top-0 left-0 z-40">
        <div className="box-container flex justify-between items-center">
          <Avatar />

          <Button />
        </div>
      </header>

      {showNavbar && <Navbar />}
    </>
  )
}
