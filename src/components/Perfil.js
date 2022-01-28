import React, { Component } from 'react';
import {PerfilContainer, H1, Div, DivImg, Img, Nombre, Email, Btn} from '../styles/PerfilStyled'

export default class Perfil extends Component {
  render() {
    return <PerfilContainer>
        <H1>Perfil</H1>

        <Div>
          <DivImg>
            <Img src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg" alt="Foto de perfil"/>
          </DivImg>
          <Nombre>Juan Juan</Nombre>
          <Email>juan@gmail.com</Email> <br/>
        </Div>
        <Btn>Cerrar sesión</Btn>
    </PerfilContainer>;
  }
}
