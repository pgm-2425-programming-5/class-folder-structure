// src/components/layout/Nav/Nav.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-blue-300">Home</Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-blue-300">Login</Link>
        </li>
        <li>
          <Link href="/signup" className="hover:text-blue-300">Sign Up</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
