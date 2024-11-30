package com.gostki.hobbyfinder.controller;

import com.gostki.hobbyfinder.model.dto.UserDto;
import com.gostki.hobbyfinder.model.entity.User;
import com.gostki.hobbyfinder.repository.UserRepository;
import com.gostki.hobbyfinder.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class LoginController {

    @Autowired
    UserService service;


    @GetMapping("/login")
    public String getLoginPage(){
        System.out.println("AAA");
        return "login";
    }

    @GetMapping("/home")
    public String getLogoutPage(){
        return "home";
    }

    @GetMapping("/register")
    public String getRegisterPage(){
        return "register";
    }

    @PostMapping
    public String regsiterUser(@RequestParam("username") String username, @RequestParam("password") String password) {
        UserDto dto = new UserDto();
        dto.setEmail(username);
        dto.setName(username);
        dto.setPassword(password);
        dto.setRoles(new String[]{"USER"});

        service.saveUser(dto);

        return "redirect:/login";
    }
}