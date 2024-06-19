import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const startQuiz = () => {
    if (username) {
      navigate('/quiz', { state: { username } });
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center bg-gray-100 " style={{backgroundImage: "url('images/quizpic.jpg')"}} >
      <div className=" p-6 rounded shadow-md w-full max-w-md bg-teal-200">
        <h1 className="text-2xl font-bold mb-4">Enter Your Name</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded"
          placeholder="Your Name"
        />
        <button
          onClick={startQuiz}
          className="w-full bg-blue-500 text-white px-3 py-2 rounded"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
