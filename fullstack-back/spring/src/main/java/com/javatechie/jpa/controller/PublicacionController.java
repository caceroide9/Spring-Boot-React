package com.javatechie.jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


import com.javatechie.jpa.entity.Publicacion;
import com.javatechie.jpa.repository.PublicacionRepository;
import com.javatechie.jpa.excepcion.CustomerNotfoundException;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class PublicacionController {
    @Autowired
    private PublicacionRepository publicacionRepository;

    @PostMapping("/publicacion")
    Publicacion newPublicacion(@RequestBody Publicacion newPublicacion){
        return publicacionRepository.save(newPublicacion);
    }

    @GetMapping("/publicaciones")
    List<Publicacion> getPublicacion(){
        return publicacionRepository.findAll();
    }

    @GetMapping("/publicacion/{id}")
    Publicacion getPublicacionById(@PathVariable int id) {
        return publicacionRepository.findById(id)
                .orElseThrow(() -> new CustomerNotfoundException(id));
    }

    @PutMapping("/publicacion/{id}")
    Publicacion updatePublicacion(@RequestBody Publicacion newPublicacion, @PathVariable int id) {
        return publicacionRepository.findById(id)
                .map(publica -> {
                    publica.setCantidad_pts(newPublicacion.getCantidad_pts());
                    publica.setEstado(newPublicacion.getEstado());
                    publica.setMensaje(newPublicacion.getMensaje());
                    publica.setCp_fk(newPublicacion.getCp_fk());
                    return publicacionRepository.save(publica);
                }).orElseThrow(() -> new CustomerNotfoundException(id));
    }

    @DeleteMapping("/publicacion/{id}")
    String deletePublicacion(@PathVariable int id){
        if(!publicacionRepository.existsById(id)){
            throw new CustomerNotfoundException(id);
        }
        publicacionRepository.deleteById(id);
        return  "Point with id "+id+" has been deleted success.";
    }
    
}

  
  
