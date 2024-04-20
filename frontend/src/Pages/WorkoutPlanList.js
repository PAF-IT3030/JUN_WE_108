import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkoutPlanList = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedWorkoutPlan, setUpdatedWorkoutPlan] = useState({});
  const [updateId, setUpdateId] = useState('');

  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/workout-plans');
        setWorkoutPlans(response.data);
      } catch (error) {
        console.error('Error fetching workout plans:', error);
      }
    };
    fetchWorkoutPlans();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/workout-plans/${id}`);
      setWorkoutPlans(workoutPlans.filter((workoutPlan) => workoutPlan.id !== id));
      window.alert('Workout plan deleted!!');
    } catch (error) {
      console.error('Error deleting workout plan:', error);
    }
  };

  const handleUpdate = (workoutPlan) => {
    setUpdatedWorkoutPlan(workoutPlan);
    setUpdateId(workoutPlan.id);
    setShowUpdateForm(true);
  };

  const handleSubmitUpdate = async () => {
    try {
      await axios.put(`http://localhost:9000/api/workout-plans/${updateId}`, updatedWorkoutPlan);
      setShowUpdateForm(false);
      setUpdatedWorkoutPlan({});
      setUpdateId('');
      window.location.reload();
    } catch (error) {
      console.error('Error updating workout plan:', error);
    }
  };
  

  return (
    <div className="workout-plan-list">
      <h1 className="workout-plan-title">Your Workout Plans</h1>
      <ul>
        {workoutPlans.map((workoutPlan) => (
          <li key={workoutPlan.id} className="workout-plan">
            <div>
              <strong>Title:</strong> {workoutPlan.title}
            </div>
            <div>
              <strong>Description:</strong> {workoutPlan.description}
            </div>
            <div>
              <strong>Routines:</strong>
              <ul>
                {workoutPlan.routines.map((routine, index) => (
                  <li key={index}>{routine}</li>
                ))}
              </ul>
            </div>
            <button onClick={() => handleDelete(workoutPlan.id)}>Delete</button>
            <button onClick={() => handleUpdate(workoutPlan)} style={{ backgroundColor: '#28a745', color: '#fff' }}>Update</button>
          </li>
        ))}
      </ul>

      {showUpdateForm && (
        <div>
          <h2>Update Workout Plan</h2>
          <input
            type="text"
            value={updatedWorkoutPlan.title}
            onChange={(e) => setUpdatedWorkoutPlan({ ...updatedWorkoutPlan, title: e.target.value })}
          />
          <input
            type="text"
            value={updatedWorkoutPlan.description}
            onChange={(e) => setUpdatedWorkoutPlan({ ...updatedWorkoutPlan, description: e.target.value })}
          />
          <input
            type="text"
            value={updatedWorkoutPlan.routines}
            onChange={(e) => setUpdatedWorkoutPlan({ ...updatedWorkoutPlan, routines: e.target.value })}
          />
          <button onClick={handleSubmitUpdate}>Submit Update</button>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanList;

