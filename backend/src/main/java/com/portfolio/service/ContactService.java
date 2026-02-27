package com.portfolio.service;

import com.portfolio.entity.ContactMessage;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final JavaMailSender mailSender;

    public ContactMessage saveMessage(ContactMessage message) {
        message.setCreatedAt(LocalDateTime.now());
        // Simple console logging since we have no database
        System.out.println("----------------------------------------");
        System.out.println("New Contact Message Received!");
        System.out.println("Name: " + message.getName());
        System.out.println("Email: " + message.getEmail());
        System.out.println("Message: " + message.getMessage());
        System.out.println("----------------------------------------");

        sendNotificationEmail(message);

        return message;
    }

    private void sendNotificationEmail(ContactMessage message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom("menesesaldrian@gmail.com");
        mailMessage.setTo("menesesav@bsp.gov.ph");
        mailMessage.setSubject("New Portfolio Contact Form Submission from: " + message.getName());
        mailMessage.setText(
                "You have received a new message from your portfolio website.\n\n" +
                        "Name: " + message.getName() + "\n" +
                        "Email: " + message.getEmail() + "\n\n" +
                        "Message:\n" + message.getMessage());

        try {
            mailSender.send(mailMessage);
            System.out.println("Email notification sent successfully to menesesav@bsp.gov.ph");
        } catch (Exception e) {
            // Log the error but don't fail the contact submission process
            System.err.println("Failed to send email notification: " + e.getMessage());
        }
    }
}
