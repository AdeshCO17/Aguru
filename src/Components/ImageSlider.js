import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';


function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <>
  
    <Carousel className=' '  {...settings}>
    <Wrap className=' h-80 px-2 py-2 shadow-lg  '>
    <img  src='banner1.jpg' alt='default.png'/>
    </Wrap>
    <Wrap className=' h-80 px-2 py-2 shadow-lg  '>
    <img src='banner2.jpg' alt='default.png'/>
    </Wrap>
    <Wrap className=' h-80 px-2 py-2 shadow-lg'  >
    <img src='banner3.png' alt='default.png'/>
    </Wrap>
    </Carousel>
    <div className='  h-6 bg-gradient-to-r from-cyan-500 to-purple-600'></div>

    </>

  )
}

export default ImageSlider

const Carousel=styled(Slider)`
padding-top:20px;
ul li button{               // down buttom slider dot
  &:before{
    font-size:10px;
    color:rgb(150,150,171);
  }
}

li.slick-active button:before{
  color:white;
}
.slick-list{
  overflow:visible;
}
button {
  z-index:1;
}

`

const Wrap=styled.div`
cursor: pointer;
img{
  border:4px solid transparent;
  border-radius:4px;
  width:100%;
  height:100%;
  box-shodow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
  transition-duration :300ms;

  &:hover{
    border:4px solid rgba(249,249,249,0.8);
  }
}
`