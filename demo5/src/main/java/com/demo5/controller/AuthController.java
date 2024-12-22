package com.demo5.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto) {
        System.out.println("Email: " + loginDto.getEmail()); // Логируем email
        System.out.println("Пароль: " + loginDto.getPassword());
        Optional<User> userOptional = authService.authenticate(loginDto.getEmail(), loginDto.getPassword());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Map<String, String> response = new HashMap<>();
            response.put("message", "Аутентификация успешна");
            response.put("username", user.getUsername()); // Возвращаем имя
            response.put("subname", user.getSubname()); // Возвращаем фамилию
            return ResponseEntity.ok(response); // Возвращаем JSON с сообщением и данными пользователя
        } else {
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "Неверный email или пароль.")); // JSON с сообщением об ошибке
        }
    }

}
