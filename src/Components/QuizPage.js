import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
    correct: "Hyper Text Markup Language",
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["color", "font-color", "text-color", "bg-color"],
    correct: "color",
  },
  {
    question: "Which JavaScript framework is maintained by Facebook?",
    options: ["Angular", "Vue", "React", "Ember"],
    correct: "React",
  },
  {
    question: "What is the purpose of the 'alt' attribute in HTML images?",
    options: ["To specify the image width", "To provide alternative text for an image", "To define the image's border", "To link the image to a website"],
    correct: "To provide alternative text for an image",
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    correct: "<ul>",
  },
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    correct: "Cascading Style Sheets",
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<footer>", "<section>", "<bottom>", "<footering>"],
    correct: "<footer>",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["background-color", "color", "bg-color", "background"],
    correct: "background-color",
  },
  {
    question: "Which company developed the JavaScript programming language?",
    options: ["Microsoft", "Netscape", "Sun Microsystems", "IBM"],
    correct: "Netscape",
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    correct: "404",
  },
  {
    question: "What is the default port for HTTP?",
    options: ["21", "22", "80", "443"],
    correct: "80",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "id", "inline"],
    correct: "style",
  },
];

function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const { username } = location.state || {}; // Destructure username from location.state

  useEffect(() => {
    // Redirect to home if username is not available
    if (!username) {
      navigate('/home');
    }
  }, [username, navigate]);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswer = (option) => {
    const isCorrect = option === currentQuestion.correct;
    setUserAnswers([...userAnswers, { question: currentQuestion.question, answer: option, correct: isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/result', { state: { username, score, userAnswers } });
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center bg-gray-100 p-4 " style={{ backgroundImage: "url('images/quizbox2.jpg')" }}>
      <div className="   border-slate-700   bg-transparent p-6  rounded-lg    shadow-2xl w-full max-w-2xl h-3/4  space-y-10" >
        <h1 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1}: {currentQuestion.question}</h1>
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="w-full bg-blue-500 text-white px-3 py-2 rounded mb-2 hover:bg-blue-600"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizPage;
