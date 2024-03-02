package org.example.backend.controller;


import org.apache.logging.log4j.message.Message;
import org.example.backend.entities.User;
import org.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(value = "/register")
    public ResponseEntity addUser(@RequestBody User user){
        user = userService.addUser(user);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping(value = "/delete")
    public ResponseEntity deleteUser(@RequestBody User user){
        if(userService.deleteUser(user)){
            return ResponseEntity.ok("User Deleted Successfully");
        }else{
            return (ResponseEntity) ResponseEntity.notFound();
        }
    }
}
