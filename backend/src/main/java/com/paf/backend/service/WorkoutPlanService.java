package com.paf.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf.backend.entity.WorkoutPlan;
import com.paf.backend.repository.WorkoutPlanRepository;

import java.util.List;

@Service
public class WorkoutPlanService {

    @Autowired
    private WorkoutPlanRepository workoutPlanRepository;

    public List<WorkoutPlan> getAllWorkoutPlans() {
        return workoutPlanRepository.findAll();
    }

    public List<WorkoutPlan> getWorkoutPlansByUserId(String userId) {
        return workoutPlanRepository.findByUserId(userId);
    }

    public WorkoutPlan createWorkoutPlan(WorkoutPlan workoutPlan) {
        return workoutPlanRepository.save(workoutPlan);
    }

    public void updateWorkoutPlan(String id, WorkoutPlan updatedWorkoutPlan) {
        updatedWorkoutPlan.setId(id);
        workoutPlanRepository.save(updatedWorkoutPlan);
    }

    public void deleteWorkoutPlan(String id) {
        workoutPlanRepository.deleteById(id);
    }
}
