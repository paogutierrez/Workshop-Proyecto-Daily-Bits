import React, { Component } from 'react';
import {H1, Img} from '../Styleds/PerfilStyled'

export default class Perfil extends Component {
  render() {
    return <div>
        <H1>Perfil</H1>
        <Img src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg" alt="Foto de perfil"/>
        <h5>Nombre</h5>
        <span>Email</span> <br/>
        <button>Cerrar sesión</button>
    </div>;
  }
}
