package com.example.jhc.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jhc.model.User;
import com.example.jhc.repository.UserRepository;

@Service
public class UserService {
    int currentID;

    @Autowired
    UserRepository userRepository;

    public UserService() {
        super();
        // TODO Auto-generated constructor stub
    }

    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    public void addUser(User newUser) {
        userRepository.save(newUser);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findByClientID(int clientID) {
        return userRepository.findByClientID(clientID);
    }

}
