import React, { useState } from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


export default function AddPoint() {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        estado:"",
        tasa_conversion:"",
        tipopunto:""
    })

    const [option,setOption] = useState()

    function handleChange(event){
        setOption(event.target.value)
    }

    const{estado,tasa_conversion,tipopunto}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/punto",user)
        navigate("/indexPto")

    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Registrar Tipo de punto</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <input type={"text"} className="form-control" placeholder='Ingresar estado' name='estado' value={estado} onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>Tasa de conversion</label>
                    <input type={"text"} className="form-control" placeholder='Ingresar tasa de conversion' name='tasa_conversion' value={tasa_conversion} onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>Tipo de punto</label>
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
