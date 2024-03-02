package org.example.backend.service;

import org.example.backend.entities.User;
import org.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User addUser(User user){
        userRepository.save(user);
        return user;
    }

    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public boolean deleteUser(User user){
        user = findByEmail(user.getEmail());
        userRepository.delete(user);
        return true;
    }
}
