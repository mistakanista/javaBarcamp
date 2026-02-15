package com.schulmeister.barcamp.registration;


import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

        repository.save(registration);
    }

    @GetMapping("/confirm")
    public ResponseEntity<String> confirm(
            @RequestParam("token") String token) {
        String response = "Confirmation test token: " + token;
        log.info(response);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping
    public void unregister(@RequestParam String token) {
        // Abmelden
    }
}
