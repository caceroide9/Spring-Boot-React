import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams} from "react-router-dom"

export default function IndexPto() {
    const [users,setUsers]=useState([])

    const{publicacionid}=useParams()

    useEffect(()=>{
        loadPoint();
    },[]);

    const loadPoint=async()=>{
        const result=await axios.get("http://localhost:8080/publicaciones");
        setUsers(result.data);
    };

    const deletePublicacion= async (publicacionid)=>{
        await axios.delete(`http://localhost:8080/publicacion/${publicacionid}`)
        loadPoint();

    }

  return (
    
    <div className='container'>
        
        <div className='py-4'>
        <Link className="btn btn-primary mx-2" to={`/addPublicacion/`}>Agregar Publicacion</Link>
        
        <table className="table border shadow">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Mensaje</th>
                <th scope="col">Cantidad de puntos</th>
                <th scope="col">Estado</th>
                <th scope="col">Tipo de punto</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user,index)=>(
                    <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.mensaje}</td>
                        <td>{user.cantidad_pts}</td>
                        <td>{user.estado}</td>
                        <td>{user.cp_fk}</td>

                        <td>
                        <Link className="btn btn-primary mx-2" to={`/viewpublicaciones/${user.publicacionid}`}>View</Link>
                        
                            
                            <Link className='btn btn-outline-primary mx-2' to={`/editpublicacion/${user.publicacionid}`}>Edit</Link>

                            <button className='btn btn-danger mx-2' onClick={()=>deletePublicacion(user.publicacionid)}>Delete</button>
                        </td>
                     </tr>
                ))
            }
            </tbody>
        </table>



        </div>
    </div>
  )
}