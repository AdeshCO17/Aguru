import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import axios from 'axios';
import { toast } from 'react-toastify';
import Header from './Header';
import Footer from './Footer';

function Courses() {

   
 
  

  return (
    <>
        <Header/>
        <ImageSlider/>
        <Movies />
        <Footer/>
    </>
  )
}

export default Courses