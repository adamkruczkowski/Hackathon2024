package com.gostki.hobbyfinder.model.entity;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;

    private String login;

    private String password;


    private String role;


    public User() {

    }
    public User(Long id, String name, String email, String password) {
        this.id = id;
        this.name = name;
        this.login = email;
        this.password = password;
    }

    public User(Long id, String name, String email, String password, String role) {
        this.id = id;
        this.name = name;
        this.login = email;
        this.password = password;
        this.role = role;
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

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoles() {
        return role;
    }

    public void setRoles(String role) {
        this.role = role;
    }
}
