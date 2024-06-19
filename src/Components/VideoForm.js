import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoCloseCircleOutline } from "react-icons/io5";


const VideoForm = ({ id }) => {

  const DeleteChapter=(deleteId)=>{

    axios.delete(`/coursedetail/${deleteId}`)
    .then((response)=>{
      console.log("deleted")

      showChapter()
    },(error)=>
  {

  })


  }






  console.log("id of course", id);
  const [topics, setTopics] = useState("");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // chapters
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const extractFilename = (filePath) => {
      const parts = filePath.split(/\\/);
      return parts[parts.length - 1];
    };
    setTopics({ ...topics, path: extractFilename(e.target.value) });
  };

  const [chapter, setChapter] = useState([
    {
      id: 1,
      topic: "your chapters",
      path: "",
    },
  ]);

  const showChapter = () => {
    axios.get(`/coursedetail/${id}`).then(
      (response) => {
        setChapter(response.data);
        console.log("chapters ---->", response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      axios.post(`/coursedetail/details/${id}`, topics).then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );

      const response = await axios.post("/videos/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });

      console.log("File uploaded successfully:", response.data);
      // Handle success - e.g., show a success message to the user
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error - e.g., show an error message to the user
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-8 p-6  bg-slate-400 shadow-md rounded-md">
        {/* <h2 className="text-xl font-semibold mb-4">Upload Video</h2> */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-white"
            >
              Topic
            </label>
            <textarea
              type="text"
              id="topic"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="topic"
              onChange={(e) => {
                setTopics({ ...topics, topic: e.target.value });
              }}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-white"
            >
              Video File
            </label>
            <input
              type="file"
              id="file"
              accept="video/*"
              className="mt-1 block w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleFileChange}
              required
            />
          </div>
          <button
            type="submit"
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </form>

        {uploadProgress > 0 && (
          <p className="mt-4">Uploading: {uploadProgress}%</p>
        )}
        <button
          onClick={() => {
            showChapter();
          }}
          className=" mt-5 inline-block px-4 py-2 text-sm font-medium text-white  bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Show
        </button>
      </div>
      <div className="h-auto mt-4 w-[540px] rounded shadow-sm  bg-teal-500 border  tracking-widest ">
        <h3
          className=" font-bold  font-serif my-3
    "
        >
          Chapters
        </h3>
        <div className="h-20 w-70 overflow-y-auto bg-slate-300 text-center border">
          {chapter.map((chapter) => (
            <div className="flex justify-center  bg-slate-400 my-1">
            <div
              key={chapter.id}
              className="h-10  pt-1"
            >
              {chapter.topic} 
              
            </div>
            <IoCloseCircleOutline  onClick={()=>{DeleteChapter(chapter.id)}} className=" mt-2 ml-5  rounded-xl cursor-pointer bg-red-500"/>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
