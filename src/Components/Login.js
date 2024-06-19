import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import { doLogin } from '../auth'
import { useNavigate } from 'react-router-dom'
import "./login.css";
import styled from 'styled-components'

function Login() {

    const navigate=useNavigate()

    const [user,setUser]=useState({});

    const handling=(e)=>{
        postingData(user);
        e.preventDefault();
    }

    const postingData=(data)=>{
        axios.post('/authenticate/check',data).then((response)=>{
           console.log(response.data);      // token is passed 
           //save the data to local storage
           console.log(response.data)
           doLogin(response.data,()=>{
            console.log("Login detail is saved to localstorage")
            //redirect to user dashboard page
            navigate("/home")
            
           })
           console.log("login successfully!!")
        },(error)=>{
            console.log("Something went wrong!!")
        })
    }
    return (

        <Container>
     
        <Form onSubmit={handling}>
           <body>
    <div class="login_form_container">
      <div class="login_form">
        <h2>Login</h2>
        <div class="input_group">
          <i class="fa fa-user"></i>
          <input
            type="email"
            placeholder="Username"
            class="input_text"
            autocomplete="on"
            onChange={(e)=>{
                        setUser({...user,email:e.target.value})
                    }}
          />
        </div>
        <div class="input_group">
          <i class="fa fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="Password"
            class="input_text"
            autocomplete="off"
            onChange={(e)=>{
                        setUser({...user,password:e.target.value})
                    }}
          />
        </div>
        <div class="button_group" id="login_button">
          <button  type='submit'>submit</button>
        </div>
        <div class="fotter">
          <a>Forgot Password ?</a>
          <a href='/signup'>SignUp</a>
        </div>
      </div>
    </div>

  </body>

</Form>
</Container>
     
    )
  }
  
  export default Login
  const Form=styled.form`
  
  `

  const Container=styled.div`
 ${'' /* height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background-image: linear-gradient(90deg, #0AE0FF, #9900FB); */}
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh

position: relative;
overflow-x:relative;
&:before{
  background:url("bg2.jpg") center center /cover no-repeat fixed;
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}

@media screen and (max-width:385px) {

  height:100vh;

}
  
  `