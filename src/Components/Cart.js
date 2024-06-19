import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';
import Header from './Header';

function Cart() {

  
  let navigate=useNavigate()
  const notify=()=>{toast.info(' Removed', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });};


    

  // delete cart
  const DeleteCart=async(id)=>{
    axios.delete(`cart/${id}`).then((res)=>{



      setTimeout(() => {
        console.log('Action performed after 3 seconds');
        navigate("/home")
      }, 2000);
    },
  (error)=>{
    console.log("some problem arise")
  })
  }





  //payment
  const buyfunction = async (productId1,amount,name1) => {

    // Define your product details
    const productId = productId1;
    const unitAmount = amount; // Adjust as needed
    const name=name1;

    // Send a POST request with parameters
    let response = await axios.post(`http://localhost:4000/payment/${productId}/${unitAmount}/${name}`);

    if (response && response.status === 200) {
        window.location.href = response.data.url;
        console.log(response.data);
    }
}





  const [cart,setCart]=useState([{

    course:{
      title:"java by adesh",
      price:22,
      author:"adesh"
    },
   
    }])

    useEffect(()=>{

        axios.get(`/cart/all`).then((response)=>{
            setCart(response.data);
            console.log(response.data)
        },(error)=>{

         console.log("errors occures in cartlist page",error);

        }
    )


    },[])


  return (
    <>
    <Header/>
    <div className='  ' >
       <h1 className='ml-4 mt-6 font-extrabold font-serif  text-start text-4xl'>Shopping Cart</h1>


       <div className='overflow-y-auto h-[500px] my-5'>

 {cart.map((carts)=>(
        
        <div key={carts.id} className=' flex ml-4 mt-4 h-40   w-3/5 bg-gradient-to-r from-cyan-400 to-purple-400  shadow-2xl border rounded-md  cursor-pointer '>
        <img className=' h-20 w-40 my-10 mx-2' src='html-css-project.jpg' alt=''/>
        <div>

        <p className=' font-bold text-xl mt-5 ml-1 text-start '>{carts.course.title}</p>
        <p className=' text-start ml-1  font-sans font-light'>by {carts.course.author} </p>
        <p className=' text-start ml-1'>$ {carts.course.price}</p>

        </div>

        <div className=' space-x-2  space-y-2 font-bold  font-serif mt-20 ml-60'>
            <button onClick={()=>{buyfunction(carts.course.id,carts.course.price,carts.course.title,)}} className='  bg-green-400 w-20 px-2 py-1 rounded-2xl text-white active:bg-green-600 border shadow-lg'>Buy</button>
            <button onClick={()=>{
              notify()
              DeleteCart(carts.id)
              
              }} className=' bg-red-500 w-20 px-2 rounded-2xl py-1 text-white active:bg-red-700 border shadow-lg'>Cancel</button>
        </div>
      

        </div>
      ))}


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


/>


    </div>
<Footer/>
    </>
  )
}

export default Cart