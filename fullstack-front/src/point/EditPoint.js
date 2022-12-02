import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditPoint() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [user,setUser]=useState({
        estado:"",
        tasa_conversion:"",
        tipopunto:""
    })

    const{estado,tasa_conversion,tipopunto}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/punto/${id}`,user)
        navigate("/indexPto")

    };

    const loadUser= async () =>{
        const result= await axios.get(`http://localhost:8080/punto/${id}`)
        setUser(result.data)

    }



  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Editar Puntos</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>Name</label>
                    <input type={"text"} className="form-control" placeholder='Ingresar estado' name='estado' value={estado} onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>Username</label>
                    <input type={"text"} className="form-control" placeholder='Ingresar tasa de conversion' name='tasa_conversion' value={tasa_conversion} onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>Email</label>
                    <input type={"text"} className="form-control" placeholder='Ingresar tipo de punto' name='tipopunto' value={tipopunto} onChange={(e)=>onInputChange(e)}></input>
                </div>

                <button type="submit" className='btn btn-outline-primary'>Submit</button>
                <Link to="/indexPto" className='btn btn-outline-danger mx-2'>Cancel</Link>
                </form>






            </div>
        </div>
    </div>
  )
}