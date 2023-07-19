"use client";

import { createContext, useContext, useState } from "react";
import { ChildrenProp } from "@/common";

interface Context {
  showNavbar: boolean
  handleShowNavbar: () => void
}

const NavbarContext = createContext<Context>({} as Context);

export default function NavbarProvider({ children }: ChildrenProp) {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    const handle = !showNavbar;
    setShowNavbar(handle);
  }

  return (
    <NavbarContext.Provider value={{
      showNavbar,
      handleShowNavbar,
    }}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbarContext = () => useContext(NavbarContext);
