import axios from "axios";



//isLoggedIn=>
    export const isLoggedIn=()=>{
        let data=localStorage.getItem("data");
       
    
        if(data!=null){
            return true;
        }else{
            return false;
        }
    };

    // cart calling

    export const CartLength = async () => {
        try {
          const response = await axios.get('/cart/all');
          return response.data.length;
        } catch (error) {
          console.log("errors occur in cart list page", error);
          return 0; // Return a default value or handle error accordingly
        }
      };
    
    
    //dolgoin
    export const doLogin=(data,next)=>{
    
        console.log("Adesh token recieve"+data)
        localStorage.setItem("data",JSON.stringify(data)) 
        next()
    }
    
    //do logout 
    
    export const doLogout=(next)=>{
    
        localStorage.removeItem("data")
        next()
    }
    
    //get currentUser
    
    export const getCurrentUserDetail=()=>{
        if(isLoggedIn()){
            return JSON.parse(localStorage.getItem("data"))?.user;
    
        }else{
            return undefined;
        }
    }