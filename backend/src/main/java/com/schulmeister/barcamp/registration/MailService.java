package com.schulmeister.barcamp.registration;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MailService {

    private final JavaMailSender mailSender;

    private static final String BASE_URL = "http://localhost:3000/";

    public void sendConfirmationMail(Registration registration, boolean sendMail) {

        if (!registration.isConfirmedRegistration()) {
            String confirmUrl = BASE_URL + "confirm?token=" + registration.getConfirmationToken();

            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(registration.getEmail());
            message.setSubject("Confirm your registration");

            message.setText("""
                Hi,

                please confirm your registration:

                %s

                Best regards
                Java Barcamp
                """.formatted(confirmUrl));
            if (sendMail) {
                mailSender.send(message);
            }

        }

    }
}
