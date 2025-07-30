import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-textLight px-4 sm:px-6 lg:px-8 pt-6 pb-20 max-w-3xl mx-auto">
      {children}
    </div>
  );
};

export default Layout;


