package com.paf.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.paf.backend.entity.MealPlan;

public interface MealPlanRepository extends MongoRepository<MealPlan, String> {
    List<MealPlan> findByUserId(String userId);
}