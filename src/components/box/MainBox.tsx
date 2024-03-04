import React from 'react';
import './box.css';

export default function MainBox(
  {
    children,
    title,
    style,
  }: {
    children: React.ReactNode,
    title: string,
    style?: React.CSSProperties
  },
) {
  return (
    <div className="main-box-container" style={style}>
      <div className="box-title">
        {title}
      </div>
      <div style={{
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '2rem',
      }} />
      <div className="box-content">
        {children}
      </div>
    </div>
  );
}
