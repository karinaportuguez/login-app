import React from 'react';
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

console.log('ID:');
console.log('Apellido paterno: ' + cookies.get('apellido_paterno'));
console.log('Apellido materno: ' + cookies.get('apellapellido_materno'));
console.log('Correo: ' + cookies.get('email'));
console.log('Username: ' + cookies.get('username'));
const Hoteles = () => {

  return (
    <>
      <h1>Hello.Salut.Hola</h1>
      <br />
      <button className="btn btn-danger" onClick={logout}>Logout</button>
    </>
  );

};

export default Hoteles;