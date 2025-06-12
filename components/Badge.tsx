import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'green' | 'default';
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  const baseStyles = 'text-xs px-2 py-1 rounded-full font-semibold';
  const colorStyles =
    variant === 'green'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800';

  return <span className={`${baseStyles} ${colorStyles}`}>{label}</span>;
}