import React, { useState } from "react";
import TimetableForm from "./TimeTableForm";
import DailyStudyLog from "./DailyStudyLog";

const StudyAnalyzer = () => {
  const [plans, setPlans] = useState([]);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📊 Study Analyzer</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Timetable Form */}
        <TimetableForm onPlansSubmit={setPlans} />

        {/* Right: Daily Study Log */}
        <DailyStudyLog plans={plans} />
      </div>
    </div>
  );
};

export default StudyAnalyzer;
