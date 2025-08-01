import React, { useRef, useState } from 'react';
import './collapsibleFilter.css';

export default function CollapsibleFilter({ children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef();

  const [header, ...content] = React.Children.toArray(children);

  return (
    <div className="collapsible-filter">
      <div
        onClick={() => setOpen((v) => !v)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          userSelect: 'none',
        }}
      >
        {header}
        <span
          className="triangle"
          style={{
            marginLeft: 8,
            display: 'inline-block',
            transition: 'transform 0.3s',
            transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        >
          ▼
        </span>
      </div>
      <div
        className="collapsible-content"
        ref={contentRef}
        style={{
          maxHeight: open
            ? contentRef.current
              ? contentRef.current.scrollHeight
              : '1000px'
            : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {content}
      </div>
    </div>
  );
}
