package com.paf.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.paf.backend.entity.MealPlan;
import com.paf.backend.service.MealPlanService;


import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/meal-plans")

public class MealPlanController {

    @Autowired
    private MealPlanService mealPlanService;

    @GetMapping
    public List<MealPlan> getAllMealPlans() {
        return mealPlanService.getAllMealPlans();
    }
    
    @GetMapping("/{userId}")
    public List<MealPlan> getMealPlansByUserId(@PathVariable String userId) {
        return mealPlanService.getMealPlansByUserId(userId);
    }

    @PostMapping
    public MealPlan createMealPlan(@RequestBody MealPlan mealPlan) {
        return mealPlanService.createMealPlan(mealPlan);
    }

    @PutMapping("/{id}")
    public void updateMealtPlan(@PathVariable String id, @RequestBody MealPlan updatedMealPlan) {
        mealPlanService.updateMealPlan(id, updatedMealPlan);
    }

    @DeleteMapping("/{id}")
    public void deleteMealPlan(@PathVariable String id) {
        mealPlanService.deleteMealPlan(id);
    }
    
} 
