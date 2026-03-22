package com.schulmeister.barcamp.topics;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@AllArgsConstructor
@Slf4j
public class TopicService {

    public static final String SAVED_SUCCESSFULLY = "Topic saved successfully: ";
    public static final String ERROR_SAVING = "Error saving topic: ";
    private TopicRepository repository;

    public ResponseEntity<String> suggest(@RequestBody @Valid TopicRequest request) {
        String response;

        Topic topic = new Topic();
        topic.setName(request.getName());
        topic.setTitle(request.getTitle());
        topic.setDescription(request.getDescription());
        topic.setCategories(request.getCategories());
        topic.setLikes(0);
        try {
            response = SAVED_SUCCESSFULLY + request.getTitle();
            repository.save(topic);
        } catch (Exception e) {
            response = ERROR_SAVING + request.getTitle();
            log.error(response + " {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(response);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
