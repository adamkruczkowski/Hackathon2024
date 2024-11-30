package com.gostki.hobbyfinder.security;

import java.util.HashSet;
import java.util.Set;

import com.gostki.hobbyfinder.model.entity.User;
import com.gostki.hobbyfinder.repository.UserRepository;
import com.gostki.hobbyfinder.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class CommandLineRunnerTest implements CommandLineRunner {

    @Autowired
    public UserRepository userRepository;
    @Autowired
	UserService userService;
    
    public static final String ADMIN_LOGIN = "admin@admin.admin";
    public static final String ADMIN_NAME = "admin";
    public static final String ADMIN_PASS = "admin";

    @Override
    @Transactional
    public void run(String... args) throws Exception {

        System.out.println("if you see this, then it worked :)");
        {
	        User adminIn = userRepository.findByLogin(ADMIN_LOGIN);
	        
	        if(adminIn == null) {
	        	adminIn = new User();
	        	adminIn.setLogin(ADMIN_LOGIN);
	        	adminIn.setName(ADMIN_NAME);
	        	adminIn.setPassword(ADMIN_PASS);
	        	
	        	String adminRole = "USER";

	        	adminIn.setRoles(adminRole);
	        	
	        	userRepository.deleteAll();
	        	
	        	userService.saveUser(adminIn);
	        	
	        	System.out.println("Admin account has been created!!!");
	        	
	        }
	    }
    }
}