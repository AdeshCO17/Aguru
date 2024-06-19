import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import { useNavigate } from 'react-router-dom';
import { getCurrentUserDetail } from '../auth';

function Videoplayer({ x }) {
  const navigate = useNavigate();
  const go=()=>{
    navigate('/landingpage')
  }




  const [path, setPath] = useState(null);
  const [title, setTitle] = useState(null);
  const [info, setInfo] = useState([{ id: "", topic: "", path: "" }]);
  const [checkedItems, setCheckedItems] = useState({});

  const getVideo = (path) => {
    setPath(`http://localhost:9900/stream/${path}`);
  };

  const settitle = (t) => {
    setTitle(t);
  };

  useEffect(() => {
    axios.get(`/coursedetail/${x}`).then(
      (response) => {
        setInfo(response.data);
      },
      (error) => {
        console.log("error comes", error);
      }
    );
  }, [x]);

  const handleCheckboxChange = (e, id) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: e.target.checked,
    }));
  };

  const countCheckedCheckboxes = () => {
    return Object.values(checkedItems).filter((isChecked) => isChecked).length;
  };

  const isAllChecked = countCheckedCheckboxes() === info.length;

  return (
    <>
      <Header />
      <div className='bg-gradient-to-r from-cyan-500 to-purple-600 h-[700px] py-8'>
        <div className='flex mt-20 ml-10 space-x-28'>
          {/* video player */}
          <div className='w-[800px] border-gray-600 bg-slate-800 rounded-lg shadow-lg'>
            <video
              className='h-[400px] w-[800px] rounded-lg shadow-lg border-gray-800'
              src={path ? path : "http://localhost:9900/stream/video3.mp4"}
              controls
              autoPlay
              muted
            ></video>
            <h1 className='mt-4 font-bold font-serif text-gray-200'>{title}</h1>
          </div>

          {/* videoplaylist */}
          <div className='h-[449px] w-[550px] mt-2 bg-slate-800 border-gray-500 tracking-widest rounded-lg'>
            <h3 className='font-bold font-serif my-3 text-white'>Course Details</h3>
            <div className='overflow-y-auto h-[380px]'>
              {info.map((details) => (
                <div key={details.id} className=' rounded-lg flex items-center mt-4 h-10 w-70 cursor-pointer bg-slate-300 text-center border pt-1 active:bg-slate-400'>
                  <input
                    type='checkbox'
                    className='mr-2'
                    checked={checkedItems[details.id] || false}
                    onChange={(e) => handleCheckboxChange(e, details.id)}
                  />
                  <div
                    className='flex-grow'
                    onClick={() => {
                      getVideo(details.path);
                      settitle(details.topic);
                    }}
                  >
                    {details.topic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Display eligibility and button if all checkboxes are checked */}
        <div className='text-yellow-300 mt-6 text-center'>
          Eligible for assessment: {countCheckedCheckboxes()} / {info.length}
          {isAllChecked && !(getCurrentUserDetail()=='ADMIN') && <button onClick={go} className=' ml-4 bg-teal-500 text-white px-4 py-2 mt-4 rounded-md'>Take Assessment</button>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Videoplayer;
