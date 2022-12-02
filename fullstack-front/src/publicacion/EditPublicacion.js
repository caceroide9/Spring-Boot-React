import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditPublicacion() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [user,setUser]=useState({
        cantidad_pts:"",
        estado:"",
        mensaje:"",
        cp_fk:""

    })

    const{cantidad_pts,estado,mensaje,cp_fk}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/publicacion/${id}`,user)
        navigate("/indexPublicaciones")

    };

    const loadUser= async () =>{
        const result= await axios.get(`http://localhost:8080/publicacion/${id}`)
        setUser(result.data)

    }



  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Editar Publicacion</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>Cantidad de puntos</label>
                    <input type={"text"} className="form-control" placeholder='Ingresar Cantidad de puntos' name='cantidad_pts' value={cantidad_pts} onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='estado' className='form-label'>Estado</label>
                    <select name='estado' className="form-control" placeholder='Ingresar estado' value={estado} onChange={(e)=>onInputChange(e)}>
                        <option value="Borrado">Borrado</option>
                        <option value="Publicado">Publicado</option>
                        <option value="Vendido">Vendido</option>
                        
                </select>
                    {/* <input type={"text"} className="form-control" placeholder='Ingresar estado' name='estado' value={estado} onChange={(e)=>onInputChange(e)}></input> */}
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>Mensaje</label>
                    <input type={"text"} className="form-control" placeholder='Ingresar mensaje' name='mensaje' value={mensaje} onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>Tipo de punto</label>
                    <input type={"text"} className="form-control" placeholder='Ingresar tipo de punto' name='cp_fk' value={cp_fk} onChange={(e)=>onInputChange(e)}></input>
                </div>

                <button type="submit" className='btn btn-outline-primary'>Submit</button>
                <Link to="/indexPublicaciones" className='btn btn-outline-danger mx-2'>Cancel</Link>
                </form>






            </div>
        </div>
    </div>
  )
}