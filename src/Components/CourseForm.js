import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoForm from './VideoForm';
import Footer from './Footer';
import Header from './Header';
import { getCurrentUserDetail } from '../auth';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const CourseForm = () => {

    const notify=()=>{toast.success(' course created now choose thumnail!', {
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

        const notifyupload=()=>{toast('🦄image has been uploaded', {
           position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
            })};
    



    const [courseId, setCourseId] = useState({ id: '' });
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        language: '',
        author: '',
        price: '',
    });
    const [selectedFile, setSelectedFile] = useState(null);  // State to hold the selected file

    const postData = (data) => {
        axios.post(`/api/usercourse/${getCurrentUserDetail().id}`, data)
            .then((response) => {
                setCourseId(response.data.id)
                console.log(response.data.id)
            },
            (error) => {
                console.log(error)
            })
    }

    const [chapter, setChapter] = useState([{
        id: 1,
        topic: "",
        path: "",
    }]);

    useEffect(() => {
        axios.get(`/coursedetail/${courseId}`).then(
            (response) => {
                setChapter(response.data)
                console.log("chapters ---->", response.data)
            }, (error) => {
                console.log(error)
            })
    }, [courseId]);  // Include courseId as a dependency

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(formData)
        setFormData({
            title: '',
            description: '',
            language: '',
            author: '',
            price: '',
        });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleImageUpload = () => {
      if (!selectedFile) {
          console.log('No file selected');
          return;
      }
  
      const formData = new FormData();
      formData.append('image', selectedFile);
  
     
  
      axios.post(`/api/image/${courseId}`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
            // Example: adding Authorization header
          }
      }).then(response => {
          console.log('Image uploaded successfully:', response.data);
          notifyupload()
      }).catch(error => {
          console.error('Error uploading image:', error);
          if (error.response) {
              console.error('Response data:', error.response.data);
              console.error('Response status:', error.response.status);
          }
      });
  };

    return (
        <>
<Header/>
        
        <div className='flex space-x-2'>
            <div className=' bg-blue-500 h-[650px] w-[800px] my-10 ml-3'>
                <h1 className='font-bold font-serif text-slate-700 my-8'>Course setup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-8">
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={(e) => {
                                setFormData({ ...formData, title: e.target.value })
                            }}
                            placeholder="Course Title"
                            className="border p-2 rounded-md w-[700px] h-10"
                        />
                        <textarea
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={(e) => {
                                setFormData({ ...formData, description: e.target.value })
                            }}
                            placeholder="Description"
                            className="border pl-2 pb-10 rounded-md w-[700px] h-28"
                        />
                        <input
                            type="text"
                            name="language"
                            value={formData.language}
                            onChange={(e) => {
                                setFormData({ ...formData, language: e.target.value })
                            }}
                            placeholder="Language"
                            className="border p-2 rounded-md w-[700px]"
                        />
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={(e) => {
                                setFormData({ ...formData, author: e.target.value })
                            }}
                            placeholder="Author Name"
                            className="border p-2 rounded-md w-[700px]"
                        />
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={(e) => {
                                setFormData({ ...formData, price: e.target.value })
                            }}
                            placeholder="Price"
                            className="border p-2 rounded-md w-[700px]"
                        />
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="border p-2 rounded-md w-[700px]"
                        />

                        <button type="button" onClick={handleImageUpload} className="  bg-purple-500 text-white px-4 py-2 w-60 rounded-md">
                            Upload Image
                        </button>

                        <button type="submit" onClick={notify} className=" ml-3 bg-teal-500 text-white px-4 py-2 w-60 rounded-md">
                            Create Course
                        </button>
                    </div>
                </form>
            </div>

            {/* Chapter */}
            <div className=' bg-blue-500  h-[650px] w-[700px] my-10'>
                <div className='mx-20 h-80 w-[540px] rounded shadow-sm bg-teal-500 border tracking-widest my-10'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold font-serif my-3'>Add Chapters</h3>
                    </div>
                    <VideoForm id={courseId} />
                </div>
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
    );
};

export default CourseForm;
