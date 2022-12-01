package com.javatechie.jpa.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class PublicResponse {

    private String tipopunto;
    private String mensaje;

    public PublicResponse(String tipopunto, String mensaje) {
        this.tipopunto = tipopunto;
        this.mensaje = mensaje;
    }

    private int price;
}
