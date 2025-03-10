'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import DockNav from './DockNav';
import NavbarDesktop from './NavbarDesktop';

export default function ResponsiveNav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isMobile ? <DockNav key="dock" /> : <NavbarDesktop key="desktop" />}
    </AnimatePresence>
  );
} 