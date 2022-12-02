import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';

import axios from 'axios'
import {Link, useParams} from "react-router-dom"

function Appv2() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };

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
    <div>
    


      <Container>
        <h1 className='text-center mt-4'>Publicaciones</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Buscador'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
           
              <th>#</th>
              <th>Tipo punto</th>
              <th>Estado</th>
              <th>Tasa de conversion</th>
              <th>Publicacion</th>
              <th>Id</th>
              <th>Punto</th>
              <th>Estado</th>

               







            </tr>
          </thead>
          <tbody>
          {
                users
                .filter((user) => {
                    return search.toLowerCase() === ''
                      ? user
                      : user.tipopunto.toLowerCase().includes(search);
                      
                  })
                .map((user,index)=>(
                    <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.tipopunto}</td>
                        <td>{user.estado}</td>
                        <td>{user.tasa_conversion}</td>
                        <td>
                        { user.publicacion.map((publicacion,index2)=>(
                          <tr>{publicacion.mensaje}</tr>))}
                        </td>
                        
                        
                        <td>
                        { user.publicacion.map((publicacion,index2)=>(
                          <tr>{publicacion.publicacionid}</tr>))}
                        </td>

                        <td>{ user.publicacion.map((publicacion,index2)=>(
                          <tr>{publicacion.cantidad_pts}</tr>))}</td>

                        <td>
                        { user.publicacion.map((publicacion,index2)=>(
                        <tr>{publicacion.estado}</tr>))}
                        </td>

                      
                    
            
                     </tr>
                ))
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Appv2;
