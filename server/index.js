

const express=require('express');
const cors=require('cors');
const { default: Stripe } = require('stripe');
const axios = require('axios');

const stripe=require('stripe')('sk_test_51OjXs8SJfw2zF6DGmmkyjunpuUavHsr1sOTlqP8eR8jPcMGYZuIzeM0LkYGpe9OqQHjRIkI9f20fXHimHm4w7Op700HIM1vP9e')





const app=express();

app.use(cors());


app.get(`/`,(req,res)=>{
    res.send('Hello world');
})



app.post('/payment/:productId/:unitAmount/:name',async(req,res)=>{

    const { productId, unitAmount, name } = req.params;

    //product
    handlePaymentSuccess(productId);

    const product=await stripe.products.create({
        name:name
    })

    if(product){
        var price=await stripe.prices.create({
            product:`${product.id}`,
            unit_amount:Number(unitAmount)*100,
            currency:'inr',
        })
    }

    if(price.id){
        var session=await stripe.checkout.sessions.create({

            line_items:[
                {
                    price:`${price.id}`,
                    quantity:1,
                }
            ],
            mode:'payment',
            success_url:`http://localhost:3000/coursedetail${productId}`,
            cancel_url:'http://localhost:4000/cartlist',
            

        })
    }

    res.json(session)


})

// Define handlePaymentSuccess function
async function handlePaymentSuccess(id) {
    try {
        // Make a POST request to the desired endpoint
        const response = await axios.post(`http://localhost:9900/api/${id}/true`);
        
        // Handle the response if needed
        console.log(response.data);
    } catch (error) {
        // Handle errors
        console.error('Error occurred:', error);
    }
}




app.listen(4000,()=>{
    console.log('server running on port 4000');
});

async function CartLength(){

    axios.get(`/cart/all`).then((response)=>{
        // setCart(response.data);
        console.log(response.data.length)
    },(error)=>{

     console.log("errors occures in cartlist page",error);

    })

    return 2;

}
