package com.gostki.hobbyfinder.repository;

import com.gostki.hobbyfinder.model.entity.User;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, Long> {

    User findByLogin(String login);

}
