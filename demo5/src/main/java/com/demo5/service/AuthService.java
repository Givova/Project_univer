package com.demo5.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo5.model.User;
import com.demo5.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<User> authenticate(String username, String password) {
        Optional<User> user = Optional.ofNullable(userRepository.findByUsername(username));

        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return user; // Аутентификация успешна
        }

        return Optional.empty(); // Аутентификация не удалась
    }
}
