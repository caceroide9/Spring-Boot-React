import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul>
                <Link className='btn btn-outline-light' to="/indexPto">Mantenedor Tipo Punto</Link>
                <Link className='btn btn-outline-light' to="/indexPublicaciones">Mantenedor de Publicaciones</Link>
                <Link className='btn btn-outline-light' to="/">Publicaciones</Link>
                </ul>
                
            </div>
        </nav>
    </div>
  )
}
