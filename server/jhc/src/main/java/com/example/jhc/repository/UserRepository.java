package com.example.jhc.repository;

import com.example.jhc.model.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByClientID(int clientID);

    User findByEmail(String email);

}
