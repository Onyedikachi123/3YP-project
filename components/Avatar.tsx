import React from 'react';

interface AvatarProps {
  src: string;
  name: string;
}

export default function Avatar({ src, name }: AvatarProps) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={src}
        alt={name}
        className="w-10 h-10 rounded-full object-cover border"
      />
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  );
}