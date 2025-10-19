import React from 'react';
import Navbar from '../components/Navbar';

const AppLayout = ({children}) => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
        <Navbar/>
        <main className="flex-grow">{children}</main>
    </div>
  )
}

export default AppLayout