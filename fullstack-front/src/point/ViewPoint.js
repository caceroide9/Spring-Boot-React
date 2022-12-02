import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"

export default function ViewPoint() {

    const [user,setUser]=useState({
        estado:"",
        tasa_conversion:"",
        tipopunto:""
    })

    const{id}=useParams();

    useEffect(()=>{
        loadUser()

    },[]);

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/punto/${id}`)
        setUser(result.data)
    }



  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Puntos Detalles</h2>

                <div className='card'>
                    <div className='card-header'>
                        Detalles de tipo de punto id:{user.idpts}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Estado:</b>
                                {user.estado}
                            </li>

                            <li className='list-group-item'>
                                <b>Tasa de conversion:</b>
                                {user.tasa_conversion}
                            </li>

                            <li className='list-group-item'>
                                <b>Tipo de punto:</b>
                                {user.tipopunto}
                            </li>

                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/indexPto"}>Back</Link>


            </div>
        </div>
    </div>
  )
}
