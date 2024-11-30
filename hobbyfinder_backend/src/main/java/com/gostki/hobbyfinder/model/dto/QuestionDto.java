package com.gostki.hobbyfinder.model.dto;

import jakarta.persistence.*;

public class QuestionDto {


    private Integer id;

    private String text;

    private String colour;

    public QuestionDto(Integer id, String text, String colour) {
        this.id = id;
        this.text = text;
        this.colour = colour;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }
}