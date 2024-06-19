import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';



function Guide({x,y,z}) {
  
  const c=x.length>0?x:"not content";
  const t=y.length>0?y:"not content";
  const u=z.length>0?z:"not content";



  return (
  <div>
  <Header/>
       
        <Container>
           {/* dsa */}
          <Form>
          <a href='/home' style={{textDecoration:'none',color:'black'}}> <h1>DSA</h1></a>
           <div><i>Programming Language</i></div>
           <Content>
            <Videos>
            <Frame src={c[0].link}></Frame>
            <Frame src={c[1].link}></Frame>
            <Frame src={c[2].link}></Frame>
            <Frame src={c[3].link}></Frame>
            </Videos>
           </Content>
      
           <div><i>Dsa in (c/c++,Java,Python)</i></div>
           <Content>
            <Videos>
            <Frame src={c[4].link}></Frame>
            <Frame src={c[5].link}></Frame>
            <Frame src={c[6].link}></Frame>
            <Frame src={c[7].link}></Frame>
            </Videos>
           </Content>
           <div><i>Platform For Practice</i></div>
           <Link className=' space-x-3'>
           <ul ><a style={{color:'red'}}  href='https://www.geeksforgeeks.org/'><b>Geeks For Geeks</b></a></ul>
           <ul><a style={{color:'red'}}  href='https://www.hackerrank.com'><b>HackerRank</b></a></ul>
           <ul><a style={{color:'red'}} href='https://www.leetcode.com'><b>LeetCode</b></a></ul>
           </Link>
          </Form>

        </Container>



     {/* web */}

        
        <Container>
         
          <Form>
          <a href='/home' style={{textDecoration:'none',color:'black'}}><h1>Web-Development</h1></a>  
           <div><i>Frontend (Html,Css,Javascripte,React.js)</i></div>
           <Content>
            <Videos>
           <Frame src={t[0].link}></Frame>
            <Frame src={t[1].link}></Frame>
         <Frame src={t[2].link}></Frame>
               <Frame src={t[3].link}></Frame>
         
            </Videos>
           </Content>
      
           <div><i>Backend (Node.js,SpringBoot,PHP,Django)</i></div>
           <Content>
            <Videos>
      <Frame src={t[4].link}></Frame>  
           <Frame src={t[5].link}></Frame>
             <Frame src={t[6].link}></Frame>
            <Frame src={t[7].link}></Frame> 
            </Videos>
           </Content>
    
          </Form>

        </Container>

        
     {/* Machine-Learning*/}

        
     <Container>
         
         <Form>
         <a href='/home' style={{textDecoration:'none',color:'black'}}><h1>Machine-Learning</h1></a> 
          <div><i>Language(Python,Ruby,R)</i></div>
          <Content>
           <Videos>
           <Frame src={u[0].link}></Frame>
            <Frame src={u[1].link}></Frame>
            <Frame src={u[2].link}></Frame>
        
     
           </Videos>
          </Content>
     
          <div><i>Machine-learning with(Python,Ruby,R)</i></div>
          <Content>
           <Videos>
   
           <Frame src={u[3].link}></Frame>
            <Frame src={u[4].link}></Frame>
            <Frame src={u[5].link}></Frame>
       
          
           </Videos>
          </Content>
   
         </Form>

       </Container>
       <Footer/>
        </div>

  )
}

export default Guide
const Container =styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Maven Pro', sans-serif;
background-image: linear-gradient(90deg, #0AE0FF, #9900FB);
height:100vh;
width:100vw;
flex-direction:col;
@media screen and (max-width:6.43in) {

  height:70vh;
width:100vw;




}

`
const Form=styled.div`
background-color: rgba(255, 255, 255, 0.229);
position: relative;
width: 76%;
height: 570px;
border-radius: 4px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

padding-bottom: 40px;
@media screen and (max-width:6.43in) {
  width: 90%;
height: 300px;
margin-top: -150px;
 }

`
const Content=styled.div`
`
const Videos=styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:10px;


`
const Frame=styled.iframe`
margin:10px;
border-radius:10px;
width:250px;
@media screen and (max-width:6.43in) {
height:30px;
width:50px;
padding:2px;

 
 }

`
const Link=styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:10px;
margin-right:25px;
@media screen and (max-width:6.43in) {

 height:20px;


 
 }
`