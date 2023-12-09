'use client';

import React, { useState } from 'react';
import { SideNavMenu } from './SideNavMenu';
import { Header } from './Header';

export default function HeaderWithNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => { setIsOpen(false); };
  const openMenu = () => { setIsOpen(true); };

  return (
    <>
      <SideNavMenu isOpen={isOpen} closeMenu={closeMenu} />
      <Header openMenu={openMenu} />
    </>
  );
}
