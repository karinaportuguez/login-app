import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const email = cookies.get('email');

const logout = () => {
  cookies.remove('id', { path: '/' });
  cookies.remove('apellido_paterno', { path: '/' });
  cookies.remove('apellido_materno', { path: '/' });
  cookies.remove('nombre', { path: '/' });
  cookies.remove('email', { path: '/' });
  cookies.remove('username', { path: '/' });
  window.location.href = './login';
}

const Hoteles = () => {

  return (
    <div className="containerPrimary">
      <div className="containerSecondary">
        <h2>Hello.Salut.Hola</h2>
        <br />
        <h3>Bienvenido a N4B</h3>
        <p>Your email is <b>{` ${email}`}</b>`</p>
        <br />
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>
    </div >
  );

};

export default Hoteles;