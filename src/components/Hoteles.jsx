import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const logout = () => {
  cookies.remove('id', { path: '/' });
  cookies.remove('apellido_paterno', { path: '/' });
  cookies.remove('apellido_materno', { path: '/' });
  cookies.remove('nombre', { path: '/' });
  cookies.remove('email', { path: '/' });
  cookies.remove('username', { path: '/' });
  window.location.href = './login';
}

const nameCompleate = cookies.get('nombre') + cookies.get('apellido_paterno') + cookies.get('apellido_materno');
const username = cookies.get('username');
const email = cookies.get('email');

const Hoteles = () => {

  return (
    <div className="containerPrimary">
      <div className="containerSecondary">
        <h2>Hello.Salut.Hola</h2>
        <br />
        <h5>{nameCompleate}</h5>
        <p>Your user name is <b>{` ${username}`}</b> and email is <b>{` ${email}`}</b>`</p>
        <br />
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>
    </div >
  );

};

export default Hoteles;