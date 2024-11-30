package com.gostki.hobbyfinder.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class LoginController {


    @GetMapping("/login")
    public String getLoginPage(){
        System.out.println("AAA");
        return "login";
    }

    @GetMapping("/home")
    public String getLogoutPage(){
        return "home";
    }
}