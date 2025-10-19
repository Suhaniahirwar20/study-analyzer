import React, { useState } from "react";

const FeedbackCard = () => {
  const [plannedHours, setPlannedhour] = useState("");
  const [actualHours, setActualhour] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleAnalyze = (e) => {
    e.preventDefault();

    const planned = parseFloat(plannedHours);
    const actual = parseFloat(actualHours);

    if (isNaN(planned) || isNaN(actual)) {
      setFeedback("Please enter valid numbers for both fields.");
      return;
    }

    if (actual == planned) {
      setFeedback("Excellent! You completed your study goal for today 🎉");
    } else if (actual > planned) {
      setFeedback("Amazing! You studied more than planned. Keep it up 💪");
    } else {
      const diff = planned - actual;
      setFeedback(
        `You studied ${diff} hours less than planned. Try to improve tomorrow 📚`
      );
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleAnalyze}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Study Feedback</h2>
        <label className="block mb-2">Planned Study Hours</label>
        <input
          type="number"
          value={plannedHours}
          onChange={(e) => setPlannedhour(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2">Actual Study Hours</label>
        <input
          type="number"
          value={actualHours}
          onChange={(e) => setActualhour(e.target.value)}
          className="w-full p-2 border rounded mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Analyze
        </button>
      </form>

      {feedback && (
        <div className="mt-6 bg-gray-50 p-4 rounded shadow w-full max-w-md text-center">
          <h3 className="text-lg font-semibold mb-2">Feedback : </h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;
