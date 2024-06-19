import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Footer from './Footer';
import { getCurrentUserDetail } from '../auth';

function Coursepurchase({x,image}) {

  let navigate=useNavigate()

  // notify
  const notify=()=>{toast.success(' Added to your Cart!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });};



  console.log("x",x)

  const [courses,setCourses]= useState([{
    id:1,
    title:"",
    description:"",
    language:"",
    author:"",
    price:"",
    payment:false,
    }]);

    const [detail,setDetail]=useState([{
      id:1,
      topic:"",
      path:"",
    }])

    //cart ds
    const [cart,setCart]=useState({
      title:" ",
      price:0,
      author:" "
    })


    useEffect(() => {
      Promise.all([
        axios.get(`/api/course/single/${x}`),
        axios.get(`/coursedetail/${x}`)
      ])
        .then(([coursesResponse, detailResponse]) => {
          setCourses(coursesResponse.data);
          setDetail(detailResponse.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, []);
    
   


    //puting the cart value
    const handleSubmit = async(x) => {

     
     
      axios.post(`/cart/add/${x}`, cart)
        .then(response => {
          console.log('Success:', response);
          // Reset form after successful submission
          // setFormData({
          //   title: '',
          //   price: 0,
          //   author: ''
          // });
          notify();

          setTimeout(() => {
            console.log('Action performed after 3 seconds');
           
            navigate("/cart")
          }, 2000);
        })
        .catch(error => {
          console.error('Error:', error);
        });


        // after 3 s navigate to cartlist page
        
    };

    
 


  
  return (
    <>
    <Header/>
    <div className='flex  h-80 bg-gray-800 justify-center items-center  space-x-32  mt-3 shadow-lg '>

        

       {/* text */}
        <div className=' space-y-6'>
        <h3 className='mx-2 font-semibold text-left  text-2xl text-white'>{courses.title}</h3>
        <p className=" mx-2 w-80 font-thin text-xs text-white text-left">{courses.description}</p>
        <p className=" mx-2 text-left font-serif  text-cyan-300">{courses.language}</p>
        <p className=" mx-2 text-left font-serif   text-blue-300 space-x-3 ">Author : {courses.author}</p>

        </div>

        {/* image */}
        <div>
        
        <img className='w-80 h-60 rounded-xl ml-60 shadow-2xl' src={`http://localhost:9900/api/image/${courses.imageName}`} alt=' '/>  
        </div>
    </div>
    <div className='  bg-gradient-to-r from-cyan-500 to-purple-600 h-3'></div>

    {/* couse info */}

    <div className='py-10 mx-20 flex'>

    <div className='  h-80 w-[540px] rounded shadow-sm  bg-slate-100 border  tracking-widest '>
    <h3 className=' font-bold  font-serif my-3
    '>Course Details</h3>

    {detail.map((details)=>(
      
      <div key={detail.id} className='  h-10 w-70 bg-slate-300 text-center border hover:bg-slate-400 pt-1 '>{details.topic}</div>))}
      
      
    </div>

    {/* enroll */}

    <div className='rounded-md h-40 w-80    bg-blue-500 ml-96  my-28'>

      <p className='mt-2 text-3xl font-bold font-serif'>₹ {courses.price}</p>


      {courses.payment || getCurrentUserDetail().roles === 'ADMIN'? <Link to={`videoplayer${x}`}>
      
      
      <button className=' mt-12    bg-purple-500  px-4 py-2 rounded-md active:bg-purble-800'>Start Learning</button></Link>
      
      :
      <button onClick={()=>{handleSubmit(x)}} className=' mt-12    bg-purple-600  px-4 py-2 rounded-md active:bg-blue-800'>Add to cart</button>}
    </div>




    </div>




    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}

/>

<Footer/>
    </>
  )
}

export default Coursepurchase


const Wrap=styled.div`
border-radius:10px;
overflow:hidden;
border:3px solid rgba(249,249,249,0.1);
box-shodow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
cursor:pointer;
img{
    width:100%;
    height:100%;
    object-fit:cover;          //fit to the div

}
&:hover{
    transform:scale(1.05);
    border-color: rgba(249,249,249,0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
rgb (0 0 0 / 72%) 0px 30px 22px -10px;
}
`