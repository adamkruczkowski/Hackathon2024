package com.gostki.hobbyfinder.service;


import com.gostki.hobbyfinder.model.dto.UserDto;
import com.gostki.hobbyfinder.model.entity.User;
import com.gostki.hobbyfinder.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
    public void saveUser(UserDto userDto) {
    	
    	 User user = new User();
         user.setName(userDto.getName());
         user.setLogin(userDto.getEmail());
         // we save the user with the appropiate privileges;
         user.setRoles(userDto.getRoles()[0]);
         // encrypt the password using spring security
         user.setPassword(passwordEncoder.encode(userDto.getPassword()));
         userRepository.save(user);
    }

    @Override
    public void saveUser(User userDto) {

        User user = new User();
        user.setName(userDto.getName());
        user.setLogin(userDto.getLogin());
        user.setRoles(userDto.getRoles());
        
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(user);
    }

    @Override
    public User findUserByLogin(String login) {
        return userRepository.findByLogin(login);
    }

   
	@Override
	public User findUserById(Long id) {
		
		return userRepository.findById(id).orElse(null);
	}
}