package com.schulmeister.barcamp.topics;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TopicRequest {

    private String title;
    
    private String name;

    private String description;

    private String categories;

}
