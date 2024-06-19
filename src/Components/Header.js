import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components'
import { CartLength, doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';

function Header() {
 let navigate=useNavigate();

 const[login,setLogin]=useState(undefined)

  useEffect(()=>{
 setLogin(isLoggedIn())
  },{login})

  const logout=()=>{

    doLogout(()=>{
      //loggout out
       setLogin(false)
       navigate("/")
      
    })
 
  }
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    const fetchCartLength = async () => {
      try {
        const length = await CartLength();
        setCartLength(length);
      } catch (err) {
        
      } finally {
        
      }
    };

    fetchCartLength();
  }, []);

   
 








  return (
    <Nav>
       <Heading className=' '> <a className='  text-xl  ' href='/home'>AGuru</a> </Heading>
      <NavMenu>
      <a href='/home'>
       <span>Home</span>
     </a>
     <a href='/cart'>
       <span>Cart</span>
       <div className='  bg-red-500  rounded-full w-5 h-5   '>
       <div className=' text-white  -mt-1'>{cartLength}</div>
       </div>
       
     </a>
     {/* <a href='/guide/'>
       <span>Guide</span>
     </a> */}
     <a href='/notes'>
       <span>Notes</span>
     </a>
     <a href='/editor'>
       <span>Editor</span>
     </a>
     <a href='/guide'>
       <span>Guide</span>
     </a>
     <a href='/contact'>
       <span>Feedback</span>
     </a>


     

   
 <div className=' ml-[680px] flex font-extrabold font-serif text-white'>
 {getCurrentUserDetail().roles === 'ADMIN' && (
          <> <a className='   font-serif font-extrabold text-purple-600' href='/courseform'>Tutor</a></>
        )} 
 {

    login && (
          <>
            <a onClick={logout}>Logout</a>
          </>
        )
        
        
      }
      {
        !login && (
          <>
            <a href='/'>Login</a>
          </>
        )

      }

        </div>
      
       
      </NavMenu>
      {/* <Button  style={{background:"black" ,border:" black"}}
        id="UncontrolledPopover"
        type="button"
      >
         <UserImg src="luffy.jpg"/>
      </Button>
      <UncontrolledPopover style={{color:"white",background:"transparent"}}
        placement="bottom"
        target="UncontrolledPopover"
      >
        <PopoverHeader>
         Writer-Name
        </PopoverHeader>
        <PopoverBody>
          
        </PopoverBody>
      </UncontrolledPopover> */}

    </Nav>
  )
}

export default Header

const Nav = styled.div`


shadow
@media screen and (max-width: 6.43in) {



height:110px;

 
 }
 
height:80px;
background: rgb(31, 30, 30);
&:hover{
  ${'' /* border:1px solid rgba(249,249,249,0.1); */}
  background:
  transition:all 900ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
}
display:flex;
align-items:center;
padding:0 36px;
`

const NavMenu = styled.div`

display:flex;
flex:1;
margin-left:10px;
margin-top:8px;
align-items:center;
padding:0 36px;
@media screen and (max-width: 6.43in) {

  margin-top:50px;
  margin-left: -145px;
  
   
   }
a{
  text-decoration:none;
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
      height:20px;
      
    }
    span{
      color:white;
      font-size:20px;
      letter-spacing:1.42px;
      position:relative;
      @media screen and (max-width: 6.43in) {

        font-size:15px;
        
         
         }
  
      &:after {                         // & means inside given tag-> div which created after the span tag
        content:" ";
        height:2px;
        background-image: linear-gradient(90deg, #0AE0FF, #9900FB);
        position:absolute;
        left:0;
        right:0;
        bottom:-6px;
        opacity:0;
        transform-origin:left center;
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        transform:scaleX(0);
      }
    }
    &:hover{               // a tag hover
      span:after{
        transform:scaleX(1);
        opacity:1;
      }
    }
  }
`


const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
margin:10px 0;
`

const Heading=styled.h1`
color:white;
box-shodow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
border:1px solid whitesmoke;
border-radius:15px;
padding:2px;

cursor:pointer;
a{
  text-decoration:none;
  color:white;

 
}

${'' /* &:hover{
  border:1px solid rgba(249,249,249,0.1);
  transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
} */}








@media screen and (max-width: 6.43in) {


height:30px;
position:relative;
left:-30px;
bottom:15px;
a{
  
  text-decoration:none;
  color:white;
  position:relative;
  top:-10px;
 
}
  
   
   }



`