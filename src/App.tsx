import React from 'react';
import {QuestionsService} from './Services/QuestionsService'
import './App.css';
import { useEffect } from 'react';
import {Quiz} from './Types/QuizTypes';
import { useState } from 'react';
import QuestionCard from './Components/QuestionsCard';
function App() {
  
  let[quiz, setQuiz] = useState<Quiz[]>([]);
  let[quizQuestion, setQuizQuestion] = useState(0);
  let[score, setScore] = useState(0);
  let[result, setResult] = useState(false);
  let[start, setStart] =  useState(false);

  useEffect( ()=> {
    const fetchData = async ()=> {
      const questions:Quiz[] = await QuestionsService(5,'easy');
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
  },[])
  
  //function to start quiz
  const startQuiz = ()=> {
    setStart(true);
  }

  const handleSubmit = (e:React.FormEvent<EventTarget>, ans: string)=> {
    e.preventDefault();
    const currentQuestion:Quiz = quiz[quizQuestion];
  
    if(ans === currentQuestion.answer) {
      setScore(++score);
    }
  
    if(quizQuestion != quiz.length - 1) {
      setQuizQuestion(++quizQuestion);
    } else {
      setResult(true);
    }
  
  }
  //To show result after submit
  if(result) {
    return(
      <div className="result">
        <h2>Result</h2>
        <p>Your Have Correct {score} Questions Out Of {quiz.length}</p>
      </div>
    )
  }
  
  if(!quiz.length) 
    return <div className="loading-state">Loading</div>

  if(start) {
    return (
      <div>
        <h2 className="header">Quiz App</h2>
        <QuestionCard 
        option={quiz[quizQuestion].option}
        question={quiz[quizQuestion].question}
        callback={handleSubmit}
        />
      </div>
    );
  }

  return(
    <div>
      <button className="start-btn" onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}

export default App;
