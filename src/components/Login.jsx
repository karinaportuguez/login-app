import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import React, { useState } from 'react';

const baseUrl = "https://desarrollo.api.noktos.com/api/login";
const cookies = new Cookies();

const Login = () => {

  const config = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  };

  const [dates, setDates] = useState({
    email: '',
    password: '',
    sistema: 2,
  })

  const data = {
    email: dates.email,
    password: dates.password,
    sistema: 2
  }

  const handleInputChange = (event) => {
    setDates({
      ...dates,
      [event.target.name]: event.target.value
    })
  }

  const loginUser = async () => {
    await axios.post(baseUrl, data, config)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .then(response => {
        if (response.res == true & response.message == 'Bienvenido a N4B') {
          const token = response.token;
          cookies.set('token', token, { path: "/" });
          cookies.set('email', data.email, { path: "/" });
          alert(`${response.message}`);
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
            <button className="btn btn-primary" onClick={loginUser} >Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login