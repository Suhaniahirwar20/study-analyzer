import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">

      <div className="flex-grow flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">
          Welcome to Study Analyzer 📚
        </h1>
        
        <p className="text-gray-600 mb-10 text-center max-w-2xl">
          Track your study progress, manage your daily schedule, and analyze
          your learning habits effectively.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3">📘 Today's Plan</h2>
            <p className="text-gray-600 mb-6">Review your subjects and time goals for today.</p>
            <button
            onClick={() => navigate("/timetable")}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Set My Timetable
          </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3">📈 Progress</h2>
            <p className="text-gray-600 mb-6">
              Track how much you’ve studied and your completion rate.
            </p>
            <button
            onClick={() => navigate("/studylog")}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          >
            Add Study Log
          </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3">💬 Feedback</h2>
            <p className="text-gray-600 mb-6">
              Get personalized feedback from your analyzer.
            </p>
            <button
            onClick={() => navigate("/feedback")}
            className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
          >
            View Feedback
          </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
