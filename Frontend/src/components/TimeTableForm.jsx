import React, { useState } from "react";

const TimeTableForm = ({ onPlansSubmit }) => {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");
  const [plans, setPlans] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || !hours) return alert("Please fill all fields!");

    const newPlan = { subject,PlannedHours:Number(hours) };
    const updatePlans = [...plans,newPlan];
    setPlans(updatePlans);
    onPlansSubmit(updatePlans);

    setSubject("");
    setHours("");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 w-full max-w-md rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          📚 Study Planner
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2  font-medium">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Planned Hours</label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Add Plan
          </button>
        </form>

        {plans.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-center">
              Plan
            </h3>

            <ul className="space-y-2">
              {plans.map((p, idx) => (
                <li
                  key={idx}
                  className="p-3 bg-gray-100 rounded flex justify-between"
                >
                  <span>{p.subject}</span>
                  <span>{p.hours} hrs</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeTableForm;
