'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

export default function SocialIcons({ 
  className = "", 
  iconSize = 20,
  iconColor = "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
}: SocialIconsProps) {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={iconSize} />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={iconSize} />,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={iconSize} />,
      url: 'https://twitter.com/yourusername',
    },
    {
      name: 'Email',
      icon: <Mail size={iconSize} />,
      url: 'mailto:your.email@example.com',
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconColor} transition-colors duration-200`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
