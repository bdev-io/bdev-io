import React from 'react';

export default function StateView({ children }: { children: React.ReactNode }) {
  return (
    <div className="right-top-info">
      <span style={{
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'white',
        fontSize: '10px',
        padding: '5px',
        background: 'black',
      }}>
        {children}
      </span>
    </div>
  );
}
