package com.schulmeister.barcamp.registration;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegistrationRequest {

    private String name;

    private String email;

    private String company;

    private boolean acceptConditions;

}
