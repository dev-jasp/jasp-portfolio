import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="font-style">{children}</div>;
  };
  
  export default Layout;