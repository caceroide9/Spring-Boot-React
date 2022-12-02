import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams} from "react-router-dom"

export default function IndexPto() {
    const [users,setUsers]=useState([])

    const{id}=useParams()

    useEffect(()=>{
        loadPoint();
    },[]);

    const loadPoint=async()=>{
        const result=await axios.get("http://localhost:8080/puntos");
        setUsers(result.data);
    };

    const deletePoint= async (idpts)=>{
        await axios.delete(`http://localhost:8080/punto/${idpts}`)
        loadPoint();

    }

  return (
    
    <div className='container'>
        
        <div className='py-4'>
        <Link className="btn btn-primary mx-2" to={`/addPto/`}>Agregar Puntos</Link>
        <table className="table border shadow">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Estado</th>
                <th scope="col">Tasa Conversion</th>
                <th scope="col">Tipo Puntos</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user,index)=>(
                    <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.estado}</td>
                        <td>{user.tasa_conversion}</td>
                        <td>{user.tipopunto}</td>
                        <td>
                        <Link className="btn btn-primary mx-2" to={`/viewpoint/${user.idpts}`}>View</Link>
                        
                            
                            {/* <Link className='btn btn-outline-primary mx-2' to={`/editpoint/${user.idpts}`}>Edit</Link> */}

                            <button className='btn btn-danger mx-2' onClick={()=>deletePoint(user.idpts)}>Delete</button>
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