
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Coursepurchase from './Components/Coursepurchase';
import ImageSlider from './Components/ImageSlider';
import Movies from './Components/Movies';

import Courses from './Components/Courses';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Videoplayer from './Components/Videoplayer';
import Cart from './Components/Cart';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Notes from './Components/Notes';
import Compiler from './Compiler/Compiler';
import Notlogin from './Components/Notlogin';
import { useAuth0 } from '@auth0/auth0-react';
import Contact from './Components/Contact';
import CourseForm from './Components/CourseForm';
import VideoForm from './Components/VideoForm';
import Login from './Components/Login';

import Signup from './Components/Signup';
import LandingPage from './Components/LandingPage';
import QuizPage from './Components/QuizPage';
import ResultPage from './Components/ResultPage';
import CertificatePage from './Components/CertificatePage';
import Certificate from './Components/Certificate';
import Guide from './Components/Guide';






function App() {

  const [link,SetLink]=useState({});
  const [link1,SetLink1]=useState({});
  const [link2,SetLink2]=useState({});
  const items = JSON.parse(localStorage.getItem('data'));

  

// const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1AZ21haWwuY29tIiwiaWF0IjoxNjk1MTMyNzE1LCJleHAiOjE2OTUxMzQ1MTV9.b9QYdkT4wLlNUvmDw6wNppdLAoEM7pxPpn4ZItS_-rU"
 

  useEffect(() => {
    // Check if items and items.token are available
      axios.get('/guide/all'
      
      ).then(
        (response) => {
          SetLink(response.data);
          console.log(response.data+" data from guide")
        },
        (error) => {
          console.log(error);
          // printStackTrace();
        }
      );
    
  }, []);

  useEffect(()=>{
    axios.get('/guide1/all'
     
).then((response)=>{

      SetLink1(response.data)

    },(error)=>{
      console.log(error)
    })

  },[])

  useEffect(()=>{
    axios.get('/guide2/all'
    
    ).then((response)=>{

      SetLink2(response.data)

    },(error)=>{
      console.log(error)
    })

  },[])

  const x=link.length>0?link:"not content";
  const y=link1.length>0?link1:"not content";
  const z=link2.length>0?link2:"not content";

  // useEffect(()=>{
  // axios.get('/language').then((response)=>{console.log(response.data)},
  // (error)=>{
  //   console.log(error)
  // })
  // },[])



 












  //cart api

  const [cart,setCart]=useState([{

    course:{
      title:"",
      price:"",
      author:""
    },
   
    }])
    
 
    // // useEffect(()=>{

       
    // // )


    // },[])
    

  //test
  // const buyfunction=async()=>{
  //   let response =await axios.post(`http://localhost:4000/payment`)

  //  if(response && response.status===200){

  //   window.location.href=response.data.url

  //   console.log(response.data)

  //  }
  // }












  const data = {
    image1: "/images/image1.png",
    image2:"/images/image2.jpg",
    image3:"/images/image3.jpg",
    image4:"/images/image4.png",
    image5:"/images/image5.jpg",
    image6:"/images/image6.jpg",
    image7:"/images/image7.jpg",
    image8:"/images/image8.png",
    image9:"/images/image2.jpg",
    image10:"/images/image2.jpg",
    
   
};



  const [courses,setCourses]= useState([{
    id:1,
    title:"x introduction",
    description:"programming language",
    language:"English",
    author:"adesh mahto",
    price:"3000"
    }]);

    useEffect(()=>{
 
     axios.get('/api/courses')
     .then(( response)=>{

        // console.log(response.data)
        setCourses(response.data);
        
     },
     (error)=>{
 
       console.log("error in courses.js",error)
     
 
     })
 
    },[] );


    



    // console.log(courses[0].id)


  return (
    <div className="App">


   <BrowserRouter>
   {/* <Header count={cart.length}/> */}
   
   {/* <Navbar/> */}
    <Routes >
   
  <Route path='/' element={<Login/>}/>
   <Route path='/home' element={<Courses/>}/>
   
    {/* 1 is here id of the course */}

      {/* <Route path='/coursedetail1' element={<Coursepurchase x={1} image={data["image1"]}/>}/>
      <Route path='/coursedetail2' element={<Coursepurchase x={2} image={data["image2"]}/>}/>
      <Route path='/coursedetail3' element={<Coursepurchase x={3} image={data['image3']}/>}/>
      <Route path='/coursedetail4' element={<Coursepurchase x={4} image={data['image4']}/>}/>
      <Route path='/coursedetail5' element={<Coursepurchase x={5} image={data['image5']}/>}/>
      <Route path='/coursedetail6' element={<Coursepurchase x={6} image={data['image6']}/>}/>
      <Route path='/coursedetail7' element={<Coursepurchase x={7} image={data['image7']}/>}/>
      <Route path='/coursedetail8' element={<Coursepurchase x={8} image={data['image8']}/>}/> */}

      { 
        courses.map(( course)=>(

          <Route path={`coursedetail${course.id}`} element={<Coursepurchase x={course.id}/>}/>
        ))

      }
      <Route path='/coursedetail1/videoplayer1' element={<Videoplayer x={1}/>}/>
      <Route path='/coursedetail2/videoplayer2' element={<Videoplayer x={2}/>}/>
      <Route path='/coursedetail3/videoplayer3' element={<Videoplayer x={3}/>}/>
      <Route path='/coursedetail4/videoplayer4' element={<Videoplayer x={4}/>}/>
      <Route path='/coursedetail5/videoplayer5' element={<Videoplayer x={5}/>}/>
      <Route path='/coursedetail6/videoplayer6' element={<Videoplayer x={6}/>}/>
      <Route path='/coursedetail7/videoplayer7' element={<Videoplayer x={7}/>}/>
      <Route path='/coursedetail8/videoplayer8' element={<Videoplayer x={8}/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/notes' element={<Notes/>}/>

      <Route path='/editor' element={<Compiler/>}/>
      <Route path='/notlogin' element={<Notlogin/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/courseform' element={<CourseForm/>}/>
      <Route path='/video' element={<VideoForm/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/landingpage' element={<LandingPage/>}/>
      <Route path='/quiz' element={<QuizPage/>}/>
      <Route path='/result' element={<ResultPage/>}/>
      <Route path='/cert' element={<CertificatePage/>}/>
      <Route path='/guide/' element={<Guide x={x} y={y} z={z}/>}/>
      

      
     
      

      
    </Routes>

    {/* <Footer/> */}
   </BrowserRouter>
  

   

  
    
    </div>
  );
}

export default App;
