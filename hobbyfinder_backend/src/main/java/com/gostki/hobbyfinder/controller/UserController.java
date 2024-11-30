package com.gostki.hobbyfinder.controller;

import com.gostki.hobbyfinder.model.dto.QuestionInDto;
import com.gostki.hobbyfinder.model.dto.UserDto;
import com.gostki.hobbyfinder.model.entity.User;
import com.gostki.hobbyfinder.repository.UserRepository;
import com.gostki.hobbyfinder.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"*"}, maxAge = 3600)
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    UserRepository userR;

    public static User getUserFromContext(UserService service) {
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication auth = context.getAuthentication();
        return service.findUserByLogin(auth.getName());

    }

    // localhost:8080/user
    @GetMapping
    public UserDto getLoggedInUser(){
        User user = getUserFromContext(userService);

        UserDto userDto = new UserDto(user);

        if(user == null){
            throw new NullPointerException("critical exception!!!");
        }

        return userDto;
    }
    // /user/personalityQuestions as POST
    @PostMapping("/personalityQuestions")
    public ResponseEntity<?> getLoggedInUser(@RequestBody List<QuestionInDto> answears){

        User user = getUserFromContext(userService);
        // male literki
        // ta wartosc ma byc z towejgo algorytmu
        String personalityLetter = "y";



        userR.save(user);

        return ResponseEntity.status(200).build();
    }

}