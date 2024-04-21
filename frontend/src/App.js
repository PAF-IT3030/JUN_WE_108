import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MealPlansPage from './Pages/MealPlansPage';
import MealPlanList from './Pages/MealPlanList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/api/meal-plans" element={<MealPlansPage />} />
        <Route path="/meal-plan-list" element={<MealPlanList />} />
      </Routes>
    </Router>ghghghgh
  );
};

export default App;
