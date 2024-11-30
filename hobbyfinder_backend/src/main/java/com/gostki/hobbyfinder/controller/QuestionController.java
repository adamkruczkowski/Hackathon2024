package com.gostki.hobbyfinder.controller;

import com.gostki.hobbyfinder.model.dto.HobbyDto;
import com.gostki.hobbyfinder.model.dto.QuestionDto;
import com.gostki.hobbyfinder.model.entity.Hobby;
import com.gostki.hobbyfinder.model.entity.Question;
import com.gostki.hobbyfinder.model.entity.User;
import com.gostki.hobbyfinder.repository.HobbyRepository;
import com.gostki.hobbyfinder.repository.QuestionRepository;
import com.gostki.hobbyfinder.service.UserService;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
public class QuestionController {
    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    HobbyRepository hobbyrepositry;

    @Autowired
    UserService us;

    public static User getUserFromContext(UserService service) {
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication auth = context.getAuthentication();
        return service.findUserByLogin(auth.getName());

    }
    // Endpoint to get all questions
    @GetMapping("/questions")
    public List<QuestionDto> getAllQuestions() {

        List<QuestionDto> dtos = new ArrayList<>();

        for(Question q : questionRepository.findAll()) {
            QuestionDto dto = new QuestionDto(q.getId(), q.getText(), q.getColour());
            dtos.add(dto);
        }

        return dtos;
    }

    @GetMapping("/threehobbyforuser")
    public List<HobbyDto> getThreeHobbys() {
        User user = getUserFromContext(us);

        String personalityLetter = user.getPersonality();

        List<Hobby> hobbies = hobbyrepositry.findAll();

        List<Hobby> thepershobby = new ArrayList<>();

        for(Hobby h : hobbies){
            if(h.getColor().contains(personalityLetter)) {

                thepershobby.add(h);
            }

        }
        Random r = new Random();
        Hobby h1 = thepershobby.get(r.nextInt(thepershobby.size()));
        thepershobby.remove(h1);

        Hobby h2 = thepershobby.get(r.nextInt(thepershobby.size()));
        thepershobby.remove(h2);

        Hobby h3 = thepershobby.get(r.nextInt(thepershobby.size()));
        thepershobby.remove(h3);

        List<HobbyDto> dtos = new ArrayList<>();

        return List.of(new HobbyDto(h1.getId(), h1.getText(), h1.getColor()),
                new HobbyDto(h2.getId(), h2.getText(), h2.getColor()),
                new HobbyDto(h3.getId(), h3.getText(), h3.getColor())
        );
    }



}