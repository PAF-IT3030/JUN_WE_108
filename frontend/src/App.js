import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkoutPlansPage from './Pages/WorkoutPlansPage';
import WorkoutPlanList from './Pages/WorkoutPlanList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/api/workout-plans" element={<WorkoutPlansPage />} />
        <Route path="/workout-plan-list" element={<WorkoutPlanList />} />
      </Routes>
    </Router>
  );
};

export default App;
