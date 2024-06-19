import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Movies() {

  
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



    const [courses, setCourses] = useState([{
   
    }]);

    useEffect(() => {
        axios.get('/api/courses')
            .then(response => {
                // Update the courses state with the data received from the API
                setCourses(response.data);
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
            });
    }, []);

    return (
        <Container>
            <h4 className='mt-10 font-bold text-2xl'>Learn New Technologies</h4>
            <Content className='py-8'>
                {/* Iterate over each course in the courses array */}
                {courses.map(course => (
                    <Link to={`/coursedetail`+`${course.id}`} key={course.id}>
                        <div className='mx-1 px-1 border rounded'>
                            <Wrap>
                                {/* Assuming the API provides an image URL for each course */}
                                <img src={`http://localhost:9900/api/image/${course.imageName}`} alt={course.title} />
                            </Wrap>
                            <div className='w-50 h-30 bg-white'>
                                <h3 className='mx-2 font-semibold text-left text-sm'>{course.title}</h3>
                                <p className="mx-2 text-left font-thin text-xs">{course.author}</p>
                                <p className="mx-2 text-left font-serif">₹{course.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Content>
        </Container>
    );
}

export default Movies;

const Container=styled.div`

`
const Content=styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4, minmax(0,1fr));        // acc to no. of image
`
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