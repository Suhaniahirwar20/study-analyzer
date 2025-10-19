import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import TimeTableForm from "./components/TimeTableForm";
import StudyLog from "./components/DailyStudyLog";
import Feedback from "./components/FeedbackCard";
import AppLayout from "./Layout/AppLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        <Route path="/timetable" element={
          <AppLayout>
            <TimeTableForm/>
          </AppLayout>
        }
        />

        <Route path="/studylog" element={
          <AppLayout>
            <StudyLog/>
          </AppLayout>
        }
        />

        <Route path="/feedback" element={
          <AppLayout>
            <Feedback/>
          </AppLayout>
        }
        />

      </Routes>
    </div>
  );
};

export default App;
