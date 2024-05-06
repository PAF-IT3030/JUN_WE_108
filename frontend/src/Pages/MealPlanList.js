import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/style.css';

const MealPlanList = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedMealPlan, setUpdatedMealPlan] = useState({});
  const [updateId, setUpdateId] = useState('');

  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/meal-plans');
        setMealPlans(response.data);
      } catch (error) {
        console.error('Error fetching meal plans:', error);
      }
    };
    fetchMealPlans();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/meal-plans/${id}`);
      setMealPlans(mealPlans.filter((mealPlan) => mealPlan.id !== id));
      window.alert('Meal plan deleted!!');
    } catch (error) {
      console.error('Error deleting meal plan:', error);
    }
  };

  const handleUpdate = (mealPlan) => {
    setUpdatedMealPlan(mealPlan);
    setUpdateId(mealPlan.id);
    setShowUpdateForm(true);
  };

  const handleSubmitUpdate = async () => {
    try {
      await axios.put(`http://localhost:9000/api/meal-plans/${updateId}`, updatedMealPlan);
      setShowUpdateForm(false);
      setUpdatedMealPlan({});
      setUpdateId('');
      window.location.reload();
    } catch (error) {
      console.error('Error updating meal plan:', error);
    }
  };

  console.log(mealPlans)

  return (
    
    <div className="meal-plan-list">
      <center><h1 className="meal-plan-title">Your Meal Plans</h1></center>
      <ul>
        {mealPlans.map((mealPlan) => (
          <li key={mealPlan.id} className="meal-plan">
            <div>
              <strong>Plan:</strong> {mealPlan.title}
            </div>
            <div>
              <strong>Receipe:</strong> {mealPlan.description}
            </div>
            <div>
              <strong>Nutritions:</strong>
              <ul>
                {mealPlan.routines.map((routine, index) => (
                  <li key={index}>{routine}</li>
                ))}
              </ul>
            </div>
            <button onClick={() => handleDelete(mealPlan.id)} style={{ backgroundColor: '#0096FF', color: '#fff' }}>Delete</button>
            <button onClick={() => handleUpdate(mealPlan)} style={{ backgroundColor: '#0096FF', color: '#fff' }}>Update</button>
          </li>
        ))}
      </ul>

      {showUpdateForm && (
        <div>
          <h2 >Update Meal Plan</h2>
          <input
            type="text"
            value={updatedMealPlan.title}
            onChange={(e) => setUpdatedMealPlan({ ...updatedMealPlan, title: e.target.value })}
          />&nbsp;&nbsp;
          <input
            type="text"
            value={updatedMealPlan.description}
            onChange={(e) => setUpdatedMealPlan({ ...updatedMealPlan, description: e.target.value })}
          />
          <input
            type="text"
            value={updatedMealPlan.routines}
            onChange={(e) => setUpdatedMealPlan({ ...updatedMealPlan, routines: e.target.value })}
          />&nbsp;&nbsp;
          <button onClick={handleSubmitUpdate} style={{ backgroundColor: '#0096FF', color: '#fff' }}>Submit Update</button>
        </div>
      )}
    </div>
  );
};

export default MealPlanList;

