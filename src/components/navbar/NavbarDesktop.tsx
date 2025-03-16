'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function NavbarDesktop() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1KiBz8FjuOHb8185xPOja4irlc3_id-Wb/view?usp=drive_link', external: true },
    { label: 'Hire Me', href: '/hire-me' },
    // { label: 'Contact', href: '#contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/'){
      return pathname === '/';
    }
    if (href.startsWith('#')) {
      return pathname === '/' && window.location.hash === href;
    }
    return pathname.startsWith(href);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20 
        }}
        className="w-full rounded-full px-6 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-gray-200 dark:border-[#7e7567] shadow-lg"
      >
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center  font-mono text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <Image src={'/favicon.ico'} alt='icon' width={36} height={36} className='rounded-full mr-2' />
              <span className='border dark:border-[#7e7567] rounded-lg px-2'>Web3ngineer</span>
            </Link>
          </motion.div>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                <span className={`text-sm font-medium ${
                  isActive(item.href)
                    ? 'text-black dark:text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                } transition-colors`}
                >
                  {item.label}
                </span>
                {/* Animated underline */}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: isActive(item.href) ? "100%" : "0%"
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                />
              </Link>
            ))}
            
            <motion.button
              className="p-2 rounded-full bg-gray-100/50 dark:bg-gray-800/50 text-black dark:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {resolvedTheme === 'dark' ? <Sun className="stroke-1" size={18} /> : <Moon className="stroke-1" size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
} 