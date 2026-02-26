package com.portfolio.controller;

import com.portfolio.entity.ContactMessage;
import com.portfolio.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> submitContactForm(@RequestBody ContactMessage message) {
        contactService.saveMessage(message);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Message sent successfully!");

        return ResponseEntity.ok(response);
    }
}
