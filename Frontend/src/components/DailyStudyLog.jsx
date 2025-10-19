import React, { useState } from "react";

const DailyStudyLog = ({plans}) => {
  const [subject, setSubject] = useState("");
  const [hourStudied, setHourStudied] = useState("");
  const [notes, setNotes] = useState("");
  const [logs, setLogs] = useState([]);

  const handleLogs = (e) => {
    e.preventDefault();

    if (!subject || !hourStudied) {
      return alert("Please fill all required fields!");
    }

    const newLog = {
      subject,
      hourStudied:Number(hourStudied),
      notes: notes || "no notes added",
      date: new Date().toLocaleDateString(),
    };
    setLogs([...logs, newLog]);

    setSubject("");
    setHourStudied("");
    setNotes("");
  };

  const getComparison = (subject)=>{
    const plan = plans.find((p)=>p.subject.toLowerCase() === subject.toLowerCase());
    const actual = logs
    .filter((log)=>log.subject.toLowerCase() === subject.toLowerCase()) 
    .reduce((sum,log)=>sum+log.hourStudied,0);

    if (!plan) return "No plan found";
    if (actual === plan.plannedHours) return "✅ Met Goal";
    if (actual > plan.plannedHours) return "🌟 Exceeded Target";
    return `⚠️ Below Target (${actual}/${plan.plannedHours} hrs)`;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">
          🕓 Daily Study Log
        </h1>

        <form onSubmit={handleLogs} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject name"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Hours Studied</label>
            <input
              type="number"
              value={hourStudied}
              onChange={(e) => setHourStudied(e.target.value)}
              placeholder="Enter hours studied"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              min="0.5"
              step="0.5"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Notes (optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What did you study today?"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
          >
            Add Log
          </button>
        </form>

        {logs.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-center">📘 Study History</h3>

            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {logs.map((log, idx) => (
                <li
                  key={idx}
                  className="p-3 bg-gray-100 rounded border flex flex-col gap-1"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{log.subject}</span>
                    <span className="text-sm text-gray-600">{log.date}</span>
                  </div>
                  <span>{log.hourStudied} hrs</span>
                  <p className="text-gray-700 text-sm">{log.notes}</p>
                  <p>{getComparison(log.subject)}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyStudyLog;
