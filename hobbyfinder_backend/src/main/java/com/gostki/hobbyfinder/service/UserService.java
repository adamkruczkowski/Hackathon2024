package com.gostki.hobbyfinder.service;

import com.gostki.hobbyfinder.model.dto.UserDto;
import com.gostki.hobbyfinder.model.entity.User;

public interface UserService {

    void saveUser(User user);
    
    void saveUser(UserDto userDto);

    User findUserByLogin(String email);

	User findUserById(Long id);

}
