// src/components/layout/Header/Header.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">
          <Link href="/">My Next.js App
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
