"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'হোম' },
  { href: '/products', label: 'চারাগুলি' },
  { href: '/offers', label: 'আম চারা' },
  { href: '/offers', label: 'পেয়ারা চারা ' },
  { href: '/offers', label: 'লটকন চারা' },
  { href: '/offers', label: 'লিচু চারা' },
  { href: '/offers', label: 'পরামর্শ' },
  { href: '/offers', label: 'অফার' },
  { href: '/services', label: 'সেবা' },
  { href: '/contact', label: 'যোগাযোগ' },
  { href: '/about', label: 'রিভিউ' },
  { href: '/about', label: 'সাধারণ প্রশ্ন' },
];

const Navbar = () => {
  const pathname = usePathname(); // active link স্টাইল করার জন্য

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🌿 লটকন নার্সারী</div>

      <div style={styles.scrollContainer}>
        <div style={styles.navLinks}>
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} passHref>
              <span
                style={{
                  ...styles.link,
                  backgroundColor: pathname === item.href ? '#4caf50' : '#2e7d32',
                }}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}; 

const styles = {
  nav: {
    backgroundColor: '#1e3932',
    color: '#fff',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#ffeb3b',
    textAlign: 'center',
  },
  scrollContainer: {
    overflowX: 'auto',
    direction: 'rtl',
    WebkitOverflowScrolling: 'touch',
  },
  navLinks: {
    display: 'inline-flex',
    flexDirection: 'row-reverse',
    gap: '12px',
    padding: '8px 4px',
    direction: 'ltr',
  },
  link: {
    padding: '8px 16px',
    backgroundColor: '#2e7d32',
    borderRadius: '20px',
    color: '#fff',
    whiteSpace: 'nowrap',
    fontSize: '15px',
    transition: 'background 0.3s',
    cursor: 'pointer',
  },
};

export default Navbar;
