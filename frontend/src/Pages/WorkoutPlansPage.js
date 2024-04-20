import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const WorkoutPlansPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [routines, setRoutines] = useState(['']);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddRoutine = () => {
    setRoutines([...routines, '']);
  };

  const handleRoutineChange = (index, value) => {
    const newRoutines = [...routines];
    newRoutines[index] = value;
    setRoutines(newRoutines);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || routines.some((routine) => !routine.trim())) {
      alert('Please fill in all fields and routines');
      return;
    }

    try {
      await axios.post('http://localhost:9000/api/workout-plans', {
        userId: 'user123',
        title,
        description,
        routines,
      });
      
      setTitle('');
      setDescription('');
      setRoutines(['']);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Error creating workout plan:', error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Create Workout Plan</h1>
        {showSuccessMessage && <div className="success-message">Workout plan added successfully!</div>}
        <form onSubmit={handleSubmit} className="form">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder=" Enter title" />
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder=" Enter description" />
          <label>Routines:</label>
          {routines.map((routine, index) => (
            <input
              key={index}
              type="text"
              value={routine}
              onChange={(e) => handleRoutineChange(index, e.target.value)}
              placeholder={` Routine ${index + 1}`}
            />
          ))}
          <button type="button" onClick={handleAddRoutine}>Add Routine</button>
          <button type="submit">Create Workout Plan</button>
          <Link to="/workout-plan-list" type='button' className="button">Go to Workout Plan List</Link>
        </form>
      </div>
    </div>
  );
};

export default WorkoutPlansPage;





