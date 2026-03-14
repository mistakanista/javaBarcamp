package com.schulmeister.barcamp.sponsors;


import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/sponsors")
@Slf4j
@AllArgsConstructor
public class SponsorController {

    SponsorService sponsorService;

    @PostMapping
    public ResponseEntity<String> add(@RequestBody @Valid SponsorRequest request) {
        return sponsorService.add(request);
    }

    @GetMapping
    public ResponseEntity<List<Sponsor>> getAll() {
        List<Sponsor> allSponsors = sponsorService.getAllSponsors();
        log.info("all sponsors: {}", allSponsors.size());
        return ResponseEntity.ok(allSponsors);
    }



}
