package com.example.spring_boot_mongodb_crud.controller;

import com.example.spring_boot_mongodb_crud.controller.dto.request.UserRequest;
import com.example.spring_boot_mongodb_crud.model.User;
import com.example.spring_boot_mongodb_crud.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8070")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/api/addworkoutplan")
    public void createWorkout(@RequestBody UserRequest userRequest) {
        userService.save(userRequest);
    }

    @GetMapping("/api/workoutplan")
    public List<User> getWorkouts() {
        return userService.getWorkouts();
    }

    @GetMapping("/api/workoutplan/{id}")
    public User getWorkoutById(@PathVariable String id) {
        return userService.getWorkoutById(id);
    }

    @DeleteMapping("/api/deleteworkoutplan/{id}")
    public void deleteWorkoutById(@PathVariable String id) {
        userService.deleteWorkoutById(id);
    }    

    @PutMapping("/api/workoutplan/{id}")
    public void updateWorkoutById(@PathVariable String id, @RequestBody UserRequest userRequest) {
        userService.updateUser(userRequest, id);
    }
    

}
