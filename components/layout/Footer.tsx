// src/components/layout/Footer/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto p-4 text-center">
        &copy; {new Date().getFullYear()} My Next.js App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
