package com.javatechie.jpa.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Publicacion {
    @Id
    private int publicacionid;
    private String mensaje;
    private int cantidad_pts;
    private String estado;
    private int cp_fk;
    public Publicacion(String mensaje, int cantidad_pts, String estado, int cp_fk ) {
        this.mensaje = mensaje;
        this.cantidad_pts = cantidad_pts;
        this.estado = estado;
        this.cp_fk=cp_fk;
    }
}
