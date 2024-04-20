import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealPlanList = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedMealPlan, setUpdatedMealPlan] = useState({});
  const [updateId, setUpdateId] = useState('');

  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const response = await axios.get('http://localhost:9001/api/meal-plans');
        setMealPlans(response.data);
      } catch (error) {
        console.error('Error fetching meal plans:', error);
      }
    };
    fetchMealPlans();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9001/api/meal-plans/${id}`);
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
      await axios.put(`http://localhost:9001/api/meal-plans/${updateId}`, updatedMealPlan);
      setShowUpdateForm(false);
      setUpdatedMealPlan({});
      setUpdateId('');
      window.location.reload();
    } catch (error) {
      console.error('Error updating meal plan:', error);
    }
  };
  

  return (
    <div className="workout-plan-list">
      <h1 className="workout-plan-title">Your Meal Plans</h1>
      <ul>
        {mealPlans.map((mealPlan) => (
          <li key={mealPlan.id} className="workout-plan">
            <div>
              <strong>Plan:</strong> {mealPlan.plan}
            </div>
            <div>
              <strong>Recipe:</strong> {mealPlan.recipe}
            </div>
            <div>
              <strong>Nutritions:</strong>
              <ul>
                {mealPlan.nutritions.map((nutrition, index) => (
                  <li key={index}>{nutrition}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Portion:</strong> {mealPlan.portion}
            </div>
            <button onClick={() => handleDelete(mealPlan.id)}>Delete</button>
            <button onClick={() => handleUpdate(mealPlan)} style={{ backgroundColor: '#28a745', color: '#fff' }}>Update</button>
          </li>
        ))}
      </ul>

      {showUpdateForm && (
        <div>
          <h2>Update Meal Plan</h2>
          <input
            type="text"
            value={updatedMealPlan.plan}
            onChange={(e) => setUpdatedMealPlan({ ...updatedMealPlan, plan: e.target.value })}
          />
          <input
            type="text"
            value={updatedMealPlan.recipe}
            onChange={(e) => setUpdatedMealPlan({ ...updatedMealPlan, recipe: e.target.value })}
          />
          <input
            type="text"
            value={updatedMealPlan.nutritions}
            onChange={(e) => setUpdatedMealPlan({ ...updatedMealPlan, nutritions: e.target.value })}
          />
          <input
            type="text"
            value={updatedMealPlan.portion}
            onChange={(e) => setUpdatedMealPlan({ ...updatedMealPlan, portion: e.target.value })}
          />
          <button onClick={handleSubmitUpdate}>Submit Update</button>
        </div>
      )}
    </div>
  );
};

export default MealPlanList;

