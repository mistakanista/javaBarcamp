package com.schulmeister.barcamp.registration;


import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/registrations")
@Slf4j
public class RegistrationController {

    RegistrationRepository repository;

    public RegistrationController(RegistrationRepository repository){
        this.repository = repository;
    }

    @PostMapping
    public void register(@RequestBody @Valid RegistrationRequest request) {

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
        repository.save(registration);
    }

    @GetMapping("/confirm")
    public ResponseEntity<String> confirm(
            @RequestParam("token") String token) {
        String response = "Registration could not be found or invalid confirmation token: " + token;
        Optional<Registration> registrationOptional = repository.findByConfirmationToken(token);
        if (registrationOptional.isPresent()) {
            response = handleRegistration(registrationOptional.get());
        }
        log.info(response);
        return ResponseEntity.ok(response);
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

    @DeleteMapping
    public void unregister(@RequestParam String token) {
        // Abmelden
    }
}
