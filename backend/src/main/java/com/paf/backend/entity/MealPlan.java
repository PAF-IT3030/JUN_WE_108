package com.paf.backend.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Document(collection = "mealPlans")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MealPlan {

    @Id
    private String id;
    private String userId;
    private String plan;
    private String recipe;
    private String nutritions;
    private String portion;

    }
    
  

