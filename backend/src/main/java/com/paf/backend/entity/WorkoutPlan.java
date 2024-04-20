package com.paf.backend.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Document(collection = "workoutPlans")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkoutPlan {

    @Id
    private String id;
    private String userId;
    private String title;
    private String description;
    private String[] routines;

    }
    
  

