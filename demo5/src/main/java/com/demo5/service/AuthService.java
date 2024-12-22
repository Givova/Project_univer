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

    public Optional<User> authenticate(String email, String password) {
        User user = userRepository.findByEmail(email); // Найти пользователя
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return Optional.of(user); // Аутентификация успешна
        }
        return Optional.empty(); // Аутентификация не удалась
    }
}
