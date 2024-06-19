import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import { useNavigate } from 'react-router-dom';



function CertificatePage({ username, score }) {
  const navigate=useNavigate()

  const go=()=>{
    navigate('/home')
  }

  const ref = useRef(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'Certificate.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  const download=()=>{
    console.log("adesh certificate")
  }
  return (
    <div className="absolute pl-60 pt-40 top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50" >
      <div className=" bg-cover  bg-white p-6 rounded shadow-md w-full max-w-lg text-center" style={{ backgroundImage: "url('images/certificate.jpg')" }} ref={ref}>
        <h1 className="text-2xl font-bold underline mb-4">Certificate of Achievement</h1>
        <div className="text-center mb-6">
          <p className="text-lg">
            This is to certify that
          </p>
          <h2 className="text-3xl font-bold mb-2">{username}</h2>
          <p className="text-lg">
            has successfully completed the Course and achieved a score of {score}/10.
          </p>
          <p className="text-lg mt-4">
            Awarded by Aguru Learning
          </p>
        </div>
        <div className="border-t-2 border-gray-200 pt-4">
          <p className="text-sm text-gray-500">
            Issued on {new Date().toLocaleDateString()} | Powered by Aguru Academy
          </p>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          <p>
            
          </p>
        </div>
      </div>

      <button onClick={onButtonClick} className=' ml-5 bg-teal-300 px-2 border-slate-800 rounded-md text-blue-600 py-2'>download</button>
      <button onClick={go} className=' ml-5 bg-green-300 px-2 border-slate-800 rounded-md text-green-600 py-2'>more course</button>
    </div>
  );
}

export default CertificatePage;
