import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"

export default function ViewPublicacion() {

    const [user,setUser]=useState({
        cantidad_pts:"",
        estado:"",
        mensaje:"",
        cp_fk:""
    })

    const{id}=useParams();

    useEffect(()=>{
        loadUser()

    },[]);

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/publicacion/${id}`)
        setUser(result.data)
    }



  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Pubicacion Detalles</h2>

                <div className='card'>
                    <div className='card-header'>
                        Detalles de tipo de punto id:{user.publicacionid}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Cantidad puntos:</b>
                                {user.cantidad_pts}
                            </li>

                            <li className='list-group-item'>
                                <b>Estado:</b>
                                {user.estado}
                            </li>

                            <li className='list-group-item'>
                                <b>Mensaje:</b>
                                {user.mensaje}
                            </li>

                            <li className='list-group-item'>
                                <b>Tipo de punto:</b>
                                {user.cp_fk}
                            </li>

                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/indexPublicaciones"}>Back</Link>


            </div>
        </div>
    </div>
  )
}
