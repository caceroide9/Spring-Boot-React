import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from "react-router-dom";



export default function Home() {
    const [users,setUsers]=useState([])
    const [searchResults,setSearchResults]=useState([])

    const{publicacionid}=useParams()


    useEffect(()=>{
        loadPoint();
    },[]);

    const loadPoint=async()=>{
        const result=await axios.get("http://localhost:8080/findAllOrders2");
        setUsers(result.data);
        setSearchResults(result.data);

    };
    
  

  return (
    
    
    <div className='container'>
      <input type="text" name="search" id="search" placeholder="Search..." />
      
        <div className='py-4'>    
        <table className="table border shadow" >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Mensaje</th> 
                <th scope="col">Cantidad</th>
                <th scope="col">Estado</th>
                <th scope="col">Id Puntos</th>
                <th scope="col">Tipo punto</th>
                <th scope="col">Estado</th>
                <th scope="col">Tasa de conversion</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user,index)=>(
                    <tr>

                      <td>
                        { user.publicacion.map((publicacion,index2)=>(
                          <tr>{publicacion.publicacionid}</tr>))}
                        </td>

                        <td>
                        { user.publicacion.map((publicacion,index2)=>(
                          <tr>{publicacion.mensaje}</tr>))}
                      </td>
                    
                        

                        <td>{ user.publicacion.map((publicacion,index2)=>(
                          <tr>{publicacion.cantidad_pts}</tr>))}</td>

                        <td>
                        { user.publicacion.map((publicacion,index2)=>(
                        <tr>{publicacion.estado}</tr>))}
                        </td>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.tipopunto}</td>
                        <td>{user.estado}</td>
                        <td>{user.tasa_conversion}</td>
                        

                      
                    
            
                     </tr>
                ))
            }
            </tbody>
        </table>



        </div>
    </div>
  )
  

}

