package com.schulmeister.barcamp.sponsors;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SponsorRequest {

    private String name;

    private String email;

    private String company;

    private String logo;

    private String level;

    private Integer sort;

}
