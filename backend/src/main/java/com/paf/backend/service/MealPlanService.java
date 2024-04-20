package com.paf.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paf.backend.entity.MealPlan;
import com.paf.backend.repository.MealPlanRepository;

import java.util.List;

@Service
public class MealPlanService {

    @Autowired
    private MealPlanRepository mealPlanRepository;

    public List<MealPlan> getAllMealPlans() {
        return mealPlanRepository.findAll();
    }

    public List<MealPlan> getMealPlansByUserId(String userId) {
        return mealPlanRepository.findByUserId(userId);
    }

    public MealPlan createMealPlan(MealPlan mealPlan) {
        return mealPlanRepository.save(mealPlan);
    }

    public void updateMealPlan(String id, MealPlan updatedMealPlan) {
        updatedMealPlan.setId(id);
        mealPlanRepository.save(updatedMealPlan);
    }

    public void deleteMealPlan(String id) {
        mealPlanRepository.deleteById(id);
    }
}
