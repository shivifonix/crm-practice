// Layout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';
export default function DefaultLayout({ children }) {
  return (
    <div className="flex max-w-screen-2xl mx-auto h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full overflow-hidden scrollbar-hide">
        <Header />
        <main className="p-6 overflow-auto flex-1 text-gray-800">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
      
    </div>
  );
}
