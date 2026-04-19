package com.schulmeister.barcamp.registration;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class MailService {

    private final JavaMailSender mailSender;

    private static final String BASE_URL = "http://localhost:3000/";

    public void sendConfirmationMail(Registration registration, boolean sendMail) {

        if (!registration.isConfirmedRegistration()) {
            String confirmUrl = BASE_URL + "confirm?token=" + registration.getConfirmationToken();

            try {
                MimeMessage message = mailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(message, true);

                helper.setTo(registration.getEmail());
                helper.setSubject("KI_Code_Camp Frankfurt Registration");

                helper.setText("""
                <h2>Please confirm your registration at the Ai Code Barcamp in Frankfurt</h2>
                <a href="%s">Click here to confirm</a>
                """.formatted(confirmUrl), true);

                if (sendMail) {
                    mailSender.send(message);
                }

            } catch (MessagingException e) {
                log.error("Error sending confirmation email to {}, {}", registration.getEmail(), e.getMessage());
            }


        }

    }
}
