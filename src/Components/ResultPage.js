import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CertificatePage from './CertificatePage';
import Header from './Header';
import Footer from './Footer';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, score, userAnswers } = location.state || {};
  const [showCertificate, setShowCertificate] = useState(false);
  const passingScore = 8; // 80% of 10 questions

  useEffect(() => {
    // Redirect to home if required state is not available
    if (!username || score === undefined || !userAnswers) {
      navigate('/');
    }
  }, [username, score, userAnswers, navigate]);

  if (!username || score === undefined || !userAnswers) {
    return null; // or show a loading spinner or message
  }

  const retakeQuiz = () => {
    navigate('/landingpage');
  };

  const handleViewCertificate = () => {
    setShowCertificate(true);
  };

  return (
    <><Header/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Quiz Result</h1>
        <p className="mb-4">Hello, {username}</p>
        <p className="mb-4">You scored {score} out of 10</p>
        {score >= passingScore ? (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
            <h2 className="text-xl font-bold">Congratulations!</h2>
            <p>You passed the quiz and earned a certificate!</p>
            <button
              onClick={handleViewCertificate}
              className="mt-4 w-full bg-blue-500 text-white px-3 py-2 rounded"
            >
              View Certificate
            </button>
          </div>
        ) : (
          <div className="bg-red-100 text-red-800 p-4 rounded mb-4">
            <h2 className="text-xl font-bold">Better Luck Next Time!</h2>
            <p>Unfortunately, you did not pass. Please try again.</p>
          </div>
        )}
        <button
          onClick={retakeQuiz}
          className="w-full bg-blue-500 text-white px-3 py-2 rounded"
        >
          Retake Quiz
        </button>
      </div>
      {showCertificate && <CertificatePage username={username} score={score} />}
    </div>

<Footer/>
    </>
  );
}

export default ResultPage;
