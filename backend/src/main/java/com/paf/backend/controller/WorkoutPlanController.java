package com.paf.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.paf.backend.entity.WorkoutPlan;
import com.paf.backend.service.WorkoutPlanService;


import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/workout-plans")

public class WorkoutPlanController {

    @Autowired
    private WorkoutPlanService workoutPlanService;

    @GetMapping
    public List<WorkoutPlan> getAllWorkoutPlans() {
        return workoutPlanService.getAllWorkoutPlans();
    }
    
    @GetMapping("/{userId}")
    public List<WorkoutPlan> getWorkoutPlansByUserId(@PathVariable String userId) {
        return workoutPlanService.getWorkoutPlansByUserId(userId);
    }

    @PostMapping
    public WorkoutPlan createWorkoutPlan(@RequestBody WorkoutPlan workoutPlan) {
        return workoutPlanService.createWorkoutPlan(workoutPlan);
    }

    @PutMapping("/{id}")
    public void updateWorkoutPlan(@PathVariable String id, @RequestBody WorkoutPlan updatedWorkoutPlan) {
        workoutPlanService.updateWorkoutPlan(id, updatedWorkoutPlan);
    }

    @DeleteMapping("/{id}")
    public void deleteWorkoutPlan(@PathVariable String id) {
        workoutPlanService.deleteWorkoutPlan(id);
    }
    
} 
