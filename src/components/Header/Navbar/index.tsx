'use client';

import { useEffect, useState } from 'react';
import ButtonMobile from './ButtonMobile';
import NavLinks from './NavLinks';
import NavList from './NavList';

export default function Navbar() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  const handleShowMenu = (isShow: boolean) => () => setIsShowNavbar(isShow);

  useEffect(() => {
    const checkIsMobileScreen = () => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      setIsMobileScreen(mediaQuery.matches);
    };

    checkIsMobileScreen();

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const mediaListener = (e: MediaQueryListEvent) => {
      setIsMobileScreen(e.matches);
    };
    mediaQuery.addEventListener('change', mediaListener);

    return () => {
      mediaQuery.removeEventListener('change', mediaListener);
    }
  }, []);

  return isMobileScreen
    ? (
      <>
        <ButtonMobile
          hasClicked={isShowNavbar}
          onClick={handleShowMenu(!isShowNavbar)}
        />

        {
          isShowNavbar && (
            <NavList>
              <NavLinks onClick={handleShowMenu(false)} />
            </NavList>
          )
        }
      </>
    )
    : (
      <NavList>
        <NavLinks onClick={handleShowMenu(false)} />
      </NavList>
    )
};
