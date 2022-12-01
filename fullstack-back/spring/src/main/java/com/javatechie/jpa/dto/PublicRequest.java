package com.javatechie.jpa.dto;

import com.javatechie.jpa.entity.Tipo_punto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PublicRequest {

    private Tipo_punto tipo_punto;
}
