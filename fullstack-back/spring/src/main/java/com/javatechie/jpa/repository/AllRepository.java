package com.javatechie.jpa.repository;

import com.javatechie.jpa.dto.PublicResponse;
import com.javatechie.jpa.entity.Tipo_punto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AllRepository extends JpaRepository<Tipo_punto,Integer> {

   @Query("SELECT new com.javatechie.jpa.dto.OrderResponse(c.tipopunto , p.mensaje) FROM Tipo_punto c JOIN c.publicacion p")
    public List<PublicResponse> getJoinInformation();
}
