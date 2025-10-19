import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-6 flex justify-between">
      <h1 className="font-bold text-xl">Study Analyzer</h1>
      <div className="space-x-4 flex gap-6">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/timetable" className="hover:underline">Timetable</Link>
        <Link to="/feedback" className="hover:underline">Feedback</Link>
        <Link to="/login" className="hover:underline">LogOut</Link>
      </div>
    </nav>
  );
};

export default Navbar;
