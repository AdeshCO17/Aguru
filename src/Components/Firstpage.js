// import { useAuth0 } from '@auth0/auth0-react';
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Firstpage() {

//     let navigate=useNavigate();
//    const { loginWithRedirect } = useAuth0();

//   const { logout } = useAuth0();

//   const { user,  isAuthenticated } = useAuth0();

//   const [name,setName]=useState((null));

//   if(isAuthenticated){
//     console.log(user.address)
//   }

//   const moveto=()=>{

//     loginWithRedirect();

//     if(isAuthenticated){

//         navigate('/home')

//     }else{
//         navigate('/')
//     }
   
//   }

 







//   return (
//     <div>

//         <button onClick={()=>moveto()

        
//         }>Login</button>
        
//     </div>
//   )
// }

// export default Firstpage