package com.example.spring_boot_mongodb_crud.controller.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {
    private String id;
    private String title;
    private String description;
    private String exercises;
}
