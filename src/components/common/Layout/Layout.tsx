import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
