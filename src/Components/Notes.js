import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


function Notes() {
    const [imageUrl, setImageUrl] = useState('');
    const items = JSON.parse(localStorage.getItem('data'));

    const [flag1,setFlag1]=useState(true);
    const [flag2,setFlag2]=useState(false);
    const [flag3,setFlag3]=useState(false);
    const [flag4,setFlag4]=useState(false);
    const [flag5,setFlag5]=useState(false);
    const [flag6,setFlag6]=useState(false);
    const [flag7,setFlag7]=useState(false);
    const [flag8,setFlag8]=useState(false);
    const [flag9,setFlag9]=useState(false);
    const [flag10,setFlag10]=useState(false);
    const [flag11,setFlag11]=useState(false);
    const [flag12,setFlag12]=useState(false);
    const [flag13,setFlag13]=useState(false);
    const [flag14,setFlag14]=useState(false);
    const [flag15,setFlag15]=useState(false);
    
  
   


    const handleButtonClick = (e) => {
    switch(e){
      case 4:
        setFlag1(true);
        break;
     case 5:
        setFlag2(true);
        break;
     case 6:
      setFlag3(true);
      break;
     case 7:
      setFlag4(true);
      break;
     case 8:
      setFlag5(true);
      break;
     case 9:
        setFlag6(true);
        break;    
     case 10:
      setFlag7(true);
      break;
     case 11:
      setFlag8(true);
      break;
     case 12:
      setFlag9(true);
       break;
     case 13:
      setFlag10(true);
      break;
      
    case 14:
        setFlag11(true);
        break;
    case 15:
      setFlag12(true);
      break;
   case 16:
    setFlag13(true);
    break;
   case 17:
    setFlag14(true);
    break;  
  case 18:
    setFlag15(true);
    break;  

                     
    }
      postData(e)
    
    
   
      // postData(e)
    };
  

   const postData =(i)=>{
      
      axios.get(`/UD/pdf/download/${i}`,
      {
        headers: { Authorization: `Bearer ${items.token}` },
        responseType: 'blob'
      }
    ).then(response => {
      setImageUrl(URL.createObjectURL(response.data));
    }).catch(error => {
      console.log(error);
    });



    }


  
  return (
    <>
      <Header/>
   
    <div className=' text-white'> 
       
         {/* <a href={imageUrl}> download</a>
         <img src={imageUrl}/> */}
         
    <Container  className=' text-white' style={{backgroundImage: "url('images/note3.jpg')"}}>

   <Form className='   text-white'>
   <Header1> <a href='/home'  style={{textDecoration:'none',color:'white'}}>Notes On Languages</a>  </Header1>
   
   <SubHeader className=' font-serif font-bold'>Languages(Java,Python,C,C++,Javascript)</SubHeader>
    <NoteContainer >
        <Content className=' space-y-3' >
        
            <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>JAVA</h3>
          <Button onClick={()=>{handleButtonClick(4)}}>{ flag1 && imageUrl && <a  style={{ textDecoration: 'none' ,color:'white'}} href={imageUrl} >Download</a>}</Button>
           
        
           <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>PYTHON</h3>
           <Button onClick={()=>{handleButtonClick(5);}}>{ flag2 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>


            <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>C</h3>
            <Button onClick={()=>{handleButtonClick(6);}}>{ flag3 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
            <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>C++</h3>
            <Button onClick={()=>{handleButtonClick(7);}}>{ flag4 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
            <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>JAVASCRIPT</h3>
            <Button onClick={()=>{handleButtonClick(8);}}>{ flag5 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
        
        </Content>

    </NoteContainer>

 
   </Form>

 </Container>

 {/* web */}

 <Container  style={{backgroundImage: "url('images/note3.jpg')"}}>
 
 <Form>
 <Header1><a href='/home' style={{textDecoration:'none',color:'white'}}>Notes On Frontend</a> </Header1>
 <SubHeader className=' font-serif font-bold'>Frontend(Html,Css,Javascript,React,Angular)</SubHeader>
  <NoteContainer>
  <Content className=' space-y-3' >
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>HTML</h3>
          <Button onClick={()=>{handleButtonClick(9);}}>{ flag6 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>CSS</h3>
          <Button onClick={()=>{handleButtonClick(10);}}>{ flag7 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>JAVASCRIPT</h3>
          <Button onClick={()=>{handleButtonClick(11);}}>{ flag8 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>REACT.JS</h3>
          <Button onClick={()=>{handleButtonClick(13);}}>{ flag10 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>ANGULAR</h3>
          <Button onClick={()=>{handleButtonClick(12);}}>{ flag9 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>

      </Content>

  </NoteContainer>


 </Form>

</Container>

{/* backend */}


<Container  style={{backgroundImage: "url('images/note3.jpg')"}}>
 
 <Form>
<Header1> <a href='/home' style={{textDecoration:'none',color:'white'}}>Notes On Backend</a> </Header1>
<SubHeader className=' font-serif font-bold'>Backend(SpringBoot,PHP,Node.js,Database-(MySql,MongoDB))</SubHeader>
  <NoteContainer>
  <Content className=' space-y-3' >
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>SPRINGBOOT</h3>
          <Button onClick={()=>{handleButtonClick(14);}}>{ flag11 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>PHP</h3>
          <Button onClick={()=>{handleButtonClick(15);}}>{ flag12 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>NODE.JS</h3>
          <Button onClick={()=>{handleButtonClick(18);}}>{ flag15 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>MYSQL</h3>
          <Button onClick={()=>{handleButtonClick(16);}}>{ flag13 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
          <h3 style={{color:'#a1fef4' ,fontWeight:'bolder'} }>MONGODB</h3>
          <Button onClick={()=>{handleButtonClick(17);}}>{ flag14 && imageUrl && <a href={imageUrl}style={{ textDecoration: 'none' ,color:'white'}} >Download</a>}</Button>
        

      </Content>

  </NoteContainer>


 </Form>

</Container>
 </div>
<Footer/>
</>
  )
}

export default Notes
const SubHeader=styled.div`
@media screen and (max-width: 6.43in) {
font-size:11px;
}
`

const Header1=styled.h1`
@media screen and (max-width: 6.43in) {
font-size:20px;
}
`
const Container =styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Maven Pro', sans-serif;
 background-color:whitesmoke;

height:100vh;
width:100vw;
flex-direction:col;

`
const Form=styled.div`
${'' /* background-image: linear-gradient(90deg, #0AE0FF, #9900FB); */}

position: relative;
width: 78%;
height: 570px;
border-radius: 4px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
margin-top: 15px;
padding-bottom: 40px;
`
const NoteContainer=styled.div`
padding:20px;
display:flex;
justify-content:center;
`
const Content=styled.div`
background-color: rgba(255, 255, 255, 0.229);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:20vw;
height:65vh;
@media screen and (max-width: 6.43in) {
  width:50vw;
  height:60vh;
}
`
const Button=styled.button`
background-image: linear-gradient(90deg, #0AE0FF, #9900FB);
border-radius:5px 0 5px 0;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
color: #67ffb1;
cursor:pointer;
width:7vw;
height:4vh;
@media screen and (max-width: 6.43in) {
  width:20vw;
  height:7vw;
  ${'' /* height:55vh; */}
}
`