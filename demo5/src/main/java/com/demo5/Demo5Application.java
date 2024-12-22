package com.demo5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Demo5Application {

    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/your_database_name?encoding=UTF8";
        SpringApplication.run(Demo5Application.class, args);
    }

}
