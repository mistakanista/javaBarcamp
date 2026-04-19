package com.schulmeister.barcamp.registration;

import org.junit.jupiter.api.Test;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.UUID;

import static org.mockito.Mockito.*;

class MailServiceServiceTest {

    JavaMailSender mailSender = mock(JavaMailSender.class);

    MailService mailService = new MailService(mailSender);

    String email = "test@test.de";

    @Test
    void mailSent() {

        String token = UUID.randomUUID().toString();
        Registration registration = new Registration();
        registration.setConfirmationToken(token);
        registration.setConfirmedRegistration(false);
        registration.setEmail(email);
        mailService.sendConfirmationMail(registration, true);

        verify(mailSender, times(1)).send(any(SimpleMailMessage.class));
    }

    @Test
    void mailNotSent() {

        String token = UUID.randomUUID().toString();
        Registration registration = new Registration();
        registration.setConfirmationToken(token);
        registration.setConfirmedRegistration(false);
        registration.setEmail(email);
        mailService.sendConfirmationMail(registration, false);

        verify(mailSender, times(0)).send(any(SimpleMailMessage.class));
    }

    @Test
    void alreadyRegistered() {

        String token = UUID.randomUUID().toString();
        Registration registration = new Registration();
        registration.setConfirmationToken(token);
        registration.setConfirmedRegistration(true);
        registration.setEmail(email);
        mailService.sendConfirmationMail(registration, false);

        verify(mailSender, times(0)).send(any(SimpleMailMessage.class));
    }
}