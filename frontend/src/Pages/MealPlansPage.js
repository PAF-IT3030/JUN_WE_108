import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MealPlansPage = () => {
  const [plan, setPlan] = useState('');
  const [recipe, setRecipe] = useState('');
  const [nutritions, setNutritions] = useState(['']);
  const [portion, setPortion] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddNutritions = () => {
    setNutritions([...nutritions, '']);
  };

  const handleNutritionChange = (index, value) => {
    const newNutritions = [...nutritions];
    newNutritions[index] = value;
    setNutritions(newNutritions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!plan || !recipe || nutritions.some((nutrition) => !nutrition.trim()) || !portion) {
      alert('Please fill in all fields and Nutritions');
      return;
    }

    try {
      await axios.post('http://localhost:9001/api/meal-plans', {
        userId: 'user123',
        plan,
        recipe,
        nutritions,
        portion,
      });
      
      setPlan('');
      setRecipe('');
      setNutritions(['']);
      setPortion('');
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Error creating meal plan:', error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Create Plan</h1>
        {showSuccessMessage && <div className="success-message">Meal plan added successfully!</div>}
        <form onSubmit={handleSubmit} className="form">
          <label>Plan:</label>
          <input type="text" value={plan} onChange={(e) => setPlan(e.target.value)} placeholder=" Enter plan" />
          <label>Recipe:</label>
          <textarea value={recipe} onChange={(e) => setRecipe(e.target.value)} placeholder=" Enter recipe" />
          <label>Nutritions:</label>
          {nutritions.map((nutrition, index) => (
            <input
              key={index}
              type="text"
              value={nutrition}
              onChange={(e) => handleNutritionChange(index, e.target.value)}
              placeholder={` Nutrition ${index + 1}`}
            />
          ))}
          <label>Portion:</label>
          <input type="text" value={portion} onChange={(e) => setPortion(e.target.value)} placeholder=" Enter portion" />
          <button type="button" onClick={handleAddNutritions}>Add Meal plan</button>
          <button type="submit">Create new meal Plan</button>
          <Link to="/meal-plan-list" type='button' className="button">Go to Meal Plan List</Link>
        </form>
      </div>
    </div>
  );
};

export default MealPlansPage;





