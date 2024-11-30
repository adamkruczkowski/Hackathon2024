package com.gostki.hobbyfinder.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Hobby {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String text;

    private String color;

    // Default constructor
    public Hobby() {
    }

    // Constructor with parameters
    public Hobby(String text, String color) {
        this.text = text;
        this.color = color;
    }

    // Getter and Setter for 'id'
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    // Getter and Setter for 'text'
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    // Getter and Setter for 'color'
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

}
