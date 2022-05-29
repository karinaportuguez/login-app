import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import React, { Fragment, useState } from 'react';

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

const Login = () => {

  const [datos, setDatos] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    //console.log(event.target.name)
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }


  const loginUser = async (event) => {
    await axios.get(baseUrl, { params: { email: datos.email, password: md5(datos.password) } })
      .then(response => {
        return response.data;
      })
      .then(response => {
        if (response.length > 0) {
          var reply = response[0];
          cookies.set('id', reply.id, { path: "/" });
          cookies.set('apellido_paterno', reply.apellido_paterno, { path: "/" });
          cookies.set('apellido_materno', reply.apellido_materno, { path: "/" });
          cookies.set('nombre', reply.nombre, { path: "/" });
          cookies.set('username', reply.username, { path: "/" });
          cookies.set('email', reply.email, { path: "/" });
          alert(`Bienvenido ${reply.nombre} ${reply.apellido_paterno}`);
          window.location.href = "./hoteles";
        } else {
          alert('El usuario o la contraseña no son correctos');
        }
      })
      .catch(error => {
        console.log(error);
      })

  }

  return (
    <div>
      <div className="containerPrimary">
        <div className="containerSecondary">
          <div className="form-group">
            <label>Correo: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handleInputChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleInputChange}
            />
            <br />
            <button className="btn btn-primary" onClick={loginUser}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login