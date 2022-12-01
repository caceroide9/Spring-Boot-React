package com.javatechie.jpa.controller;

import com.javatechie.jpa.dto.PublicRequest;
import com.javatechie.jpa.dto.PublicResponse;
import com.javatechie.jpa.entity.Tipo_punto;
import com.javatechie.jpa.repository.AllRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AllController {
    @Autowired
    private AllRepository allRepository;
    

    @PostMapping("/placeOrder2")
    public Tipo_punto placeOrder(@RequestBody PublicRequest request){
       return allRepository.save(request.getTipo_punto());
    }

    @GetMapping("/findAllOrders2")
    public List<Tipo_punto> findAllOrders(){
        return allRepository.findAll();
    }

    @GetMapping("/getInfo2")
    public List<PublicResponse> getJoinInformation(){
        return allRepository.getJoinInformation();
    }
}
