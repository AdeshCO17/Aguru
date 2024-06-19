

import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import styled from 'styled-components';
function Signup() {

    const [user,setUser]=useState({
               // only admin can access the notes 
    });

    console.log("user detail-->",user)

    const handling=(e)=>{
        postingData(user);
        e.preventDefault();
    }

    const postingData=(data)=>{
        axios.post('/users/add',data).then((response)=>{
           console.log(response.data);
        },(error)=>{
            console.log("user exit")
        })
    }
    return (
     
        <Container>
     
        <Form onSubmit={handling}>
           <body>
    
    <FormContainer>
      <div class="login_form">
        <h2>SignUp</h2>
        <div class="input_group">
          <i class="fa fa-user"></i>
          
          <input
            type="text"
            placeholder="Enter First Name"
            class="input_text"
            autocomplete="on"
            onChange={(e)=>{
                        setUser({...user,firstName:e.target.value})
                    }}
          />
        </div>
        <div class="input_group">
          <i class="fa fa-user"></i>
          
          <input
            type="text"
            placeholder="Enter Second Name"
            class="input_text"
            autocomplete="on"
            onChange={(e)=>{
                        setUser({...user,lastName:e.target.value})
                    }}
          />
        </div>
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
        <div className="mb-4">
    <select
      className=" mt-5   bg-blue-950   shadow appearance-none  text-center rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
      onChange={(e) => setUser({ ...user, roles: e.target.value }) 
      }
    >
      <option value="USER">Student</option>
      <option value="ADMIN">Teacher</option>
    </select>
  </div>
        <div class="button_group " id="login_button">
          <button  type='submit'>submit</button>
        </div>
        <div class="fotter">
          <a>Forgot Password ?</a>
          <a href='/'>Login</a>
        </div>
      </div>
      </FormContainer>
 

  </body>

</Form>
</Container>
     
     
     
    )
  }
  
  export default Signup
const Form=styled.form``
  const FormContainer =styled.div`
    position: relative;
    width: 420px;
    height: 700px;
    max-width: 420px;
    max-height: 620px;
    background: #040717;
    border-radius: 50px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 70px;
    &:before{
        position: absolute;
    width: 170%;
    height: 170%;
    content: '';
    background-image: conic-gradient(transparent, transparent, transparent, #ee00ff);
    animation: rotate_border 6s linear infinite;
    }

    &:after{
        position: absolute;
    width: 170%;
    height: 170%;
    content: '';
    background-image: conic-gradient(transparent, transparent, transparent, #00ccff);
    animation: rotate_border 6s linear infinite;
    animation-delay: -3s;
    }
  
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