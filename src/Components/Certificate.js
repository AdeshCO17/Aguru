import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import './certificate.css';
// import certificateTemplate from './images/certificate.png'

function Certificate() {
  const ref = useRef(null);

  const click = () => {
    console.log("hello world");
  };

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'Certificate.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <div>
        <div className='container flex' ref={ref}>
          <img src={'images/certificate.png'} alt='certificate' />
          <div className='content'>
            <h1 className='text-white font-serif font-extrabold'>Adesh</h1>
            {/* <p className='text-white'>React bootcamp</p> */}
          </div>
        </div>
        <button onClick={click} className='ml-20 bg-slate-500'>Click me</button>
        <button onClick={onButtonClick} className='ml-4 bg-blue-500'>Download Certificate</button>
      </div>
    </>
  );
}

export default Certificate;
