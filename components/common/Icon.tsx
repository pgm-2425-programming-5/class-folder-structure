// components/common/Icon/Icon.tsx

import React from 'react';
import PropTypes from 'prop-types';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  const icons: { [key: string]: JSX.Element } = {
    search: (
      <svg
        className={`w-6 h-6 ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
    ),
    // Add more icons as needed
  };

  return icons[name] || null;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
