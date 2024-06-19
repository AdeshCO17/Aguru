import React from 'react'

function Footer() {
  return (
    <>
    <div className=' bg-gradient-to-r from-cyan-500 to-purple-600 h-10'>

    </div>


    <div className=' bg-slate-900 h-60 flex  justify-start text-white  space-x-60 pl-12  px-5 py-10 font-thin  text-lg'>

           <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Privacy policy</a></li>

                </ul>

   
            <ul>
               
                <li><a href="#">Cookie settings</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Get the app</a></li>
                <li><a href="#">Accessibility statement</a></li>
            </ul>
            <ul>
               
               <li><a href="#">Help Center</a></li>
               <li><a href="#">Customer Support</a></li>
               <li><a href="#">Shipping & Returns</a></li>
               <li><a href="#">Warranty Information</a></li>
               <li><a href="#">Social Media Links</a></li>
           </ul>
           <ul>
               
               <li><a href="#">Copyright Information</a></li>
               <li><a href="#">Blog</a></li>
               <li><a href="#">Legal Notices </a></li>
               <li><a href="#">Get the app</a></li>
               <li><a href="#">Site Credits</a></li>
           </ul>
           
    </div>
    <p className=' bg-slate-900 text-white '>&copy; 2024 Aguru,Inc.</p>

    </>
  )
}

export default Footer