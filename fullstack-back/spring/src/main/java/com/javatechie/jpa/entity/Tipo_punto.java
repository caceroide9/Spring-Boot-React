package com.javatechie.jpa.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Tipo_punto {
    @Id
    @GeneratedValue
    private int idpts;
    private String tipopunto;
    private String estado;
    private Float tasa_conversion;
    @OneToMany(targetEntity = Publicacion.class,cascade = CascadeType.ALL)
    @JoinColumn(name ="cp_fk",referencedColumnName = "idpts")
    private List<Publicacion> publicacion;
    public Tipo_punto(int idpts, String tipopunto, String estado, Float tasa_conversion,int cp_fk) {
        this.idpts = idpts;
        this.tipopunto = tipopunto;
        this.estado = estado;
        this.tasa_conversion = tasa_conversion;
    }
    
}
