import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="font-sans bg-gradient-to-r from-gray-900 to-slate-950">{children}</div>;
  };
  

  export default Layout;