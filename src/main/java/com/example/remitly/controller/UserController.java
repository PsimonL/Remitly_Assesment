package com.example.remitly.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static java.lang.invoke.VarHandle.AccessMode.GET;

@Controller
public class UserController {
    @RequestMapping(value = "/")
    public String converter_page() {
        System.out.println("working");
        return "converter";
    }
}
