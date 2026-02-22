package com.schulmeister.barcamp.registration;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
@Slf4j
public class RegistrationService {

    private RegistrationRepository repository;

    public ResponseEntity<String> register(@RequestBody @Valid RegistrationRequest request) {
        String response;
        if (repository.findByEmail(request.getEmail()).isPresent()) {
            response = "Registration attempt with already registered email: " + request.getEmail();
            log.warn(response);
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }

        Registration registration = new Registration();
        registration.setName(request.getName());
        registration.setEmail(request.getEmail());
        registration.setCompany(request.getCompany());
        registration.setAcceptConditions(request.isAcceptConditions());
        registration.setConfirmedRegistration(false);
        registration.setCancelledParticipation(false);
        String token = UUID.randomUUID().toString();
        registration.setConfirmationToken(token);
        log.info("token {}", token);
        try {
            response = "Registration successful for email: " + request.getEmail() + ". Confirmation token: " + token;
            repository.save(registration);
        } catch (Exception e) {
            response = "error saving registration for email: " + request.getEmail();
            log.error(response + " {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(response);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    public String findUser(String token) {
        String response = "Registration could not be found or invalid confirmation token: " + token;
        Optional<Registration> registrationOptional = repository.findByConfirmationToken(token);
        if (registrationOptional.isPresent()) {
            response = handleRegistration(registrationOptional.get());
        }
        return response;
    }

    private String handleRegistration(Registration registration) {
        String response;
        if (registration.isConfirmedRegistration()) {
            response = "Invalid confirmation token or user already registered";
        } else {
            registration.setConfirmedRegistration(true);
            repository.save(registration);
            response = "Registration confirmed for: " + registration.getEmail();
        }

        return response;
    }

}
