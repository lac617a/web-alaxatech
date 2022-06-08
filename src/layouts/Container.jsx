import React from 'react';

export default function Layout({children, size = ('sm', 'md', 'lg', 'xl', 'xxl', false)}) {
  return (
    <div className={`l-container${size ? '-' + size : ''}`}>{children}</div>
  )
}
