// components/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  to,
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded px-4 py-2 font-semibold text-sm transition';

  const variants = {
    primary: 'bg-[#0A5F56] text-white hover:bg-[#084C44]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link href={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
