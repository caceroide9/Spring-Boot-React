package com.javatechie.jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


import com.javatechie.jpa.entity.Tipo_punto;
import com.javatechie.jpa.repository.Tipo_puntoRepository;
import com.javatechie.jpa.excepcion.CustomerNotfoundException;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class Tipo_PuntoController {
    @Autowired
    private Tipo_puntoRepository tipo_puntoRepository;

    @PostMapping("/punto")
    Tipo_punto newTipo_Punto(@RequestBody Tipo_punto newTipo_Punto){
        return tipo_puntoRepository.save(newTipo_Punto);
    }

    @GetMapping("/puntos")
    List<Tipo_punto> getTipo_Punto(){
        return tipo_puntoRepository.findAll();
    }

    @GetMapping("/punto/{id}")
    Tipo_punto getTipo_PuntoById(@PathVariable int id) {
        return tipo_puntoRepository.findById(id)
                .orElseThrow(() -> new CustomerNotfoundException(id));
    }

    @PutMapping("/punto/{id}")
    Tipo_punto updateTipo_Punto(@RequestBody Tipo_punto newTipo_Punto, @PathVariable int id) {
        return tipo_puntoRepository.findById(id)
                .map(tipo_punto -> {
                    tipo_punto.setIdpts(newTipo_Punto.getIdpts());
                    tipo_punto.setEstado(newTipo_Punto.getEstado());
                    tipo_punto.setTasa_conversion(newTipo_Punto.getTasa_conversion());
                    return tipo_puntoRepository.save(tipo_punto);
                }).orElseThrow(() -> new CustomerNotfoundException(id));
    }

    @DeleteMapping("/punto/{id}")
    String deleteTipo_Punto(@PathVariable int id){
        if(!tipo_puntoRepository.existsById(id)){
            throw new CustomerNotfoundException(id);
        }
        tipo_puntoRepository.deleteById(id);
        return  "Point with id "+id+" has been deleted success.";
    }
    
}

  
  

 
