package com.schulmeister.barcamp.topics;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static com.schulmeister.barcamp.topics.TopicService.ERROR_SAVING;
import static com.schulmeister.barcamp.topics.TopicService.SAVED_SUCCESSFULLY;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TopicServiceTest {

    TopicRepository repository = mock(TopicRepository.class);

    TopicService topicService = new TopicService(repository);

    String title = "Java Migration";

    @Test
    void topicAdded() {

        TopicRequest request = getTopicRequest();

        when(repository.save(org.mockito.ArgumentMatchers.any(Topic.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        ResponseEntity<String> responseEntity = topicService.suggest(request);
        assertNotNull(responseEntity);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        String response =responseEntity.getBody();
        assertNotNull(response);
        assertNotEquals("", response);
        assertTrue(response.contains(SAVED_SUCCESSFULLY));
        assertTrue(response.contains(title));
    }

    @Test
    void errorSaving() {

        TopicRequest request = getTopicRequest();

        when(repository.save(org.mockito.ArgumentMatchers.any(Topic.class)))
                .thenThrow(new RuntimeException("Database error"));

        ResponseEntity<String> responseEntity = topicService.suggest(request);
        assertNotNull(responseEntity);
        assertEquals(HttpStatus.UNPROCESSABLE_ENTITY, responseEntity.getStatusCode());
        String response =responseEntity.getBody();
        assertNotNull(response);
        assertNotEquals("", response);
        assertTrue(response.contains(ERROR_SAVING));
        assertTrue(response.contains(title));
    }



    private TopicRequest getTopicRequest() {
        return TopicRequest.builder()
                .name("John Doe")
                .title(title)
                .description("here is the description")
                .categories("Java, Migration")
                .build();
    }
}