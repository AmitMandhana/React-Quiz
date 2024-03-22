
import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Earth', 'Venus', 'Mercury'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'NaCl', 'CH4'],
    correctAnswer: 'H2O',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'South Korea', 'Japan', 'Thailand'],
    correctAnswer: 'Japan',
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Whale',
  },
  {
    question: 'Which scientist developed the theory of relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
    correctAnswer: 'Albert Einstein',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Pb', 'Fe'],
    correctAnswer: 'Au',
  },
  {
    question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
    options: ['Venus', 'Mercury', 'Mars', 'Jupiter'],
    correctAnswer: 'Venus',
  },
  {
    question: 'What is the smallest country in the world?',
    options: ['Monaco', 'Maldives', 'Vatican City', 'San Marino'],
    correctAnswer: 'Vatican City',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="background">
      <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-3 rounded">
          <div className="card-body">
            {showScore ? (
              <div className="text-center">
                <h3 className="card-title">Your Score: {score} / {questions.length}</h3>
                <button className="btn btn-primary mt-3" onClick={restartQuiz}>Restart Quiz</button>
              </div>
            ) : (
              <div>
                <h5 className="card-title">Question {currentQuestion + 1} / {questions.length}</h5>
                <h4 className="card-text">{questions[currentQuestion].question}</h4>
                <div>
                  {questions[currentQuestion].options.map((option, index) => (
                    <button key={index} className="btn btn-light mt-3 mx-1" onClick={() => handleAnswerButtonClick(option)}>{option}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

