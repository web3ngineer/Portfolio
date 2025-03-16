'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon, Home, User, Code, FileUser, Briefcase, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  target:string | undefined;
  isActive: boolean;
  onClick: () => void;
}

const DockItem = ({ icon, label, href, isActive, onClick, target }: DockItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} onClick={onClick} target={target}>
      <motion.div
        className="relative flex flex-col items-center"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className={`p-2 rounded-xl backdrop-blur-md text-black dark:text-white ${
            isActive 
              ? 'bg-gray-200 dark:bg-gray-800' 
              : 'bg-gray-100/80 dark:bg-gray-900/80 hover:bg-gray-200/90 dark:hover:bg-gray-800/90'
          }`}
          whileHover={{ scale: 1.2, y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {icon}
        </motion.div>
        
        {/* Tooltip */}
        <motion.span
          className="absolute -bottom-6 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs rounded whitespace-nowrap"
          initial={{ opacity: 0, y: -2 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -2 }}
          transition={{ duration: 0.15 }}
        >
          {label}
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default function DockNav() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    // Set initial active item based on pathname
    if (pathname === '/'){
      setActiveItem('home');
    } else if (pathname === '/about') {
      setActiveItem('about');
    }
  }, [pathname]);

  // Update active item when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        setActiveItem(hash.slice(1)); // Remove the # from the hash
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems = [
    { icon: <Home className="stroke-1" size={24} />, label: 'Home', href: '/', id: 'home' },
    { icon: <User className="stroke-1" size={24} />, label: 'About', href: '/about', id: 'about' },
    // { icon: <Code className="stroke-1" size={24} />, label: 'Skills', href: '#skills', id: 'skills' },
    { icon: <Briefcase className="stroke-1" size={24} />, label: 'Projects', href: '/projects', id: 'projects' },
    { icon: <FileUser className="stroke-1" size={24} />, label: 'Resume', href: 'https://drive.google.com/file/d/1KiBz8FjuOHb8185xPOja4irlc3_id-Wb/view?usp=drive_link', id: 'resume', external:true },
    { icon: <Mail className="stroke-1" size={24} />, label: 'Hire Me', href: '/hire-me', id: 'hire-me' },
  ];

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted){
    return null;
  }

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-gray-200 dark:border-[#7e7567] shadow-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {navItems.map((item) => (
          <DockItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
        
        {/* Theme Toggle */}
        <motion.button
          className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-900/80 hover:bg-gray-200/90 dark:hover:bg-gray-800/90 backdrop-blur-md text-black dark:text-white"
          onClick={toggleTheme}
          whileHover={{ scale: 1.2, y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {resolvedTheme === 'dark' ? <Sun className="stroke-1" size={24} /> : <Moon className="stroke-1" size={24} />}
        </motion.button>
      </motion.div>
    </div>
  );
} 