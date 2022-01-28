import axios from 'axios';
import React, {useState} from 'react';
import {endPoint} from '../helpers/Url';
import styled from 'styled-components'


export const Login = () => {

    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        pasword: ''
    })

    const {email,password} = user;

    const postData = () => {
         axios.post(endPoint,user)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setUser({
          ...user,
          [target.email]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }


      return (
        <div>
           <Form id="login" onSubmit={handleSubmit}>
              
           <H2>Iniciar de Sesion</H2>
           
            <ButtonGoogle>Continuar con Google</ButtonGoogle>
            <Hr></Hr>
               < Div>
                  
                   <Input id="inputEmail" placeholder="Ingrese su correo electronico" name="email" value={email} onChange={handleChanged}/>
               </ Div>
               < Div>
                   <Input id="inputPassword" placeholder="Ingrese su contraseña" type="password"name="password" value={password} onChange={handleChanged}/>
               </ Div>
               < Div>
                   <ButtonLogin onClick={() => postData()} id="btnRegistro">Login</ButtonLogin> 
               </ Div>
              
           </Form>
        </div>
    )
}

const Form = styled.form
`
background-color:black;
text-align:center;


`
const H2 = styled.h2
`
color:white;
font-family: arial;
padding:20px;
font-size:30px;

`
const ButtonGoogle = styled.button
`

background:#EF4565;
border-radius: 5px;
color:white;
font-family: arial;
padding:15px 50px 15px 50px;
margin-bottom:20px;
cursor:pointer;

`
const Div = styled.div
`
color:white;
padding:10px;
`
const Input = styled.input
`
padding:10px 50px;
`

const ButtonLogin = styled.button
`
background:#6B47DC;
color:white;
padding:5px 20px 5px 20px;
margin-top: 20px;
border-radius:10px;
cursor:pointer;
`
const Hr = styled.hr
`
width:30%;
margin-bottom:10px;
`
