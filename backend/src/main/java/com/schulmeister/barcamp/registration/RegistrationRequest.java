package com.schulmeister.barcamp.registration;


import lombok.Data;

@Data
public class RegistrationRequest {

    private String name;

    private String email;

    private String company;

    private boolean acceptConditions;

}
