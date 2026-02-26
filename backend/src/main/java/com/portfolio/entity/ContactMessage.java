package com.portfolio.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactMessage {

    private Long id;

    private String name;
    private String email;
    private String message;

    private LocalDateTime createdAt = LocalDateTime.now();
}
