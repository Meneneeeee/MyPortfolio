package com.portfolio.service;

import com.portfolio.entity.ContactMessage;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ContactService {

    public ContactMessage saveMessage(ContactMessage message) {
        message.setCreatedAt(LocalDateTime.now());
        // Simple console logging since we have no database
        System.out.println("----------------------------------------");
        System.out.println("New Contact Message Received!");
        System.out.println("Name: " + message.getName());
        System.out.println("Email: " + message.getEmail());
        System.out.println("Message: " + message.getMessage());
        System.out.println("----------------------------------------");

        return message;
    }
}
