import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="font-sans bg-gradient-to-r from-slate-900 to-gray-900">{children}</div>;
  };
  

  export default Layout;