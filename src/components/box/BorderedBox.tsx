import React from 'react';
import './box.css';

export default function BorderedBox(
  { children }: { children: React.ReactNode },
) {
  return (
    <div className="border-box-container">
      {children}
    </div>
  );
}
