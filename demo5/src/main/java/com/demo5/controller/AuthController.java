package com.demo5.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo5.dto.LoginDto;
import com.demo5.dto.UserRegistrationDto;
import com.demo5.model.User;
import com.demo5.service.AuthService;
import com.demo5.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public void register(@RequestBody UserRegistrationDto registrationDto) {
        userService.registerUser(
                registrationDto.getUsername(),
                registrationDto.getSubname(),
                registrationDto.getEmail(),
                registrationDto.getPassword()
        );
    }

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody LoginDto loginDto) {
        Optional<User> userOptional = authService.authenticate(loginDto.getUsername(), loginDto.getPassword());

        if (userOptional.isPresent()) {
            return "Аутентификация успешна";
        } else {
            return "Ошибка аутентификации"; // Или можете возвращать кастомизированные статус-коды.
        }
    }
}
