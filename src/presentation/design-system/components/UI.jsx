import React from 'react';
import './components.css';

export function Button({ variant = 'default', children, className = '', ...props }) {
  return (
    <button className={`ds-btn ds-btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className = '' }) {
  return <div className={`ds-card ${className}`}>{children}</div>;
}

export function Badge({ variant = 'default', children }) {
  // Normalize known tags
  let normalizedVariant = variant;
  if (variant === 'hot') normalizedVariant = 'hot';
  else if (variant === 'mid') normalizedVariant = 'mid';
  else if (variant === 'ok') normalizedVariant = 'ok';
  
  return <span className={`ds-badge ds-badge-${normalizedVariant}`}>{children}</span>;
}

export function Checkbox({ checked, onChange, disabled }) {
  return (
    <div 
      className={`ds-checkbox ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled && onChange) onChange(!checked);
      }}
    >
      {checked && (
        <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
          <path d="M13.5 3.5L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );
}
