package com.gostki.hobbyfinder.repository;

import com.gostki.hobbyfinder.model.entity.Hobby;
import com.gostki.hobbyfinder.model.entity.Question;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HobbyRepository extends CrudRepository<Hobby, Integer> {

    List<Hobby> findAll();
}
