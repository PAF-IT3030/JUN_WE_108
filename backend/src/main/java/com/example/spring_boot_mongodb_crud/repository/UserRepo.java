package com.example.spring_boot_mongodb_crud.repository;

import com.example.spring_boot_mongodb_crud.model.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
}
