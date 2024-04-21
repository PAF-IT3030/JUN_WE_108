package com.example.spring_boot_mongodb_crud.service;

import com.example.spring_boot_mongodb_crud.controller.dto.request.UserRequest;
import com.example.spring_boot_mongodb_crud.model.User;
import com.example.spring_boot_mongodb_crud.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepo userRepo;

    public void save(UserRequest userRequest) {
        User user = new User();
        user.setId(userRequest.getId());
        user.setTitle(userRequest.getTitle());
        user.setDescription(userRequest.getDescription());
        user.setExercises(userRequest.getExercises());
      
    }

    public List<User> getWorkouts() {
        List<User> users = userRepo.findAll();
        return users;
    }

    public User getWorkoutById(String id) {
        Optional<User> user = userRepo.findById(id);
        return user.orElse(null);
    }

    public void deleteWorkoutById(String id) {
        userRepo.deleteById(id);
    }

    public User updateUser(UserRequest userRequest , String id) {
        Optional<User> user = userRepo.findById(id);
        user.ifPresent(user1 -> {
            user1.setTitle(userRequest.getTitle());
            user1.setDescription(userRequest.getDescription());
            user1.setExercises(userRequest.getExercises());
            userRepo.save(user1);
        });
      return user.get();
    }
}
