package com.gostki.hobbyfinder.model.dto;

import com.gostki.hobbyfinder.model.entity.User;

import java.util.Set;

public class UserDto {

    private Long id;

    private String name;

    private String email;

    private String password;

    private String[] roles;

    private String role;

    private String personality;

    public UserDto(){

    }
    
    public UserDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getLogin();
        //this.password = user.getPassword();
        this.roles = new String[] {user.getRoles()};
        this.personality = user.getPersonality();
        role = user.getRoles();

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String[] getRoles() {
        return roles;
    }

    public void setRoles(String[] roles) {
        this.roles = roles;
    }
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
    
    
}
