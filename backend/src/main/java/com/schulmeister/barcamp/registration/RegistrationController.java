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
