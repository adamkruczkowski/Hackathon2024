package com.gostki.hobbyfinder.model.dto;

public class QuestionInDto {


    private Integer id;

    private Integer answear;

    public QuestionInDto(Integer id, Integer answear) {
        this.id = id;
        this.answear = answear;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAnswear(){

        return answear;
    }

    public void setAnswear(Integer answaer){
        this.answear = answaer;
    }

}