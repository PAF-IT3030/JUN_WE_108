import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkoutPlansPage from './Pages/WorkoutPlansPage';
import WorkoutPlanList from './Pages/WorkoutPlanList';
import Navbar from './Pages/Navbar';
import AllWorkoutPlans from './Pages/AllWorkoutPlans';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/api/workout-plans" element={<WorkoutPlansPage />} />
        <Route path="/workout-plan-list" element={<WorkoutPlanList />} />
        <Route path="/all-workout-plans-" element={<AllWorkoutPlans />} />//ssss
      </Routes>
    </Router>
  );
};

export default App;
