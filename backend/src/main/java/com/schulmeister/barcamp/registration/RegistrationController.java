package com.schulmeister.barcamp.registration;


import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/registrations")
@Slf4j
public class RegistrationController {

    @PostMapping
    public void register(@RequestBody @Valid RegistrationRequest request) {
        // speichern + Mail senden
    }

    @GetMapping("/confirm")
    public ResponseEntity<Void> confirm(
            @RequestParam("token") String token) {

        log.info("Confirmation token: {}", token);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping
    public void unregister(@RequestParam String token) {
        // Abmelden
    }
}
