import React from 'react';

export type QuizQuestionsType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Quiz = {
    question: string
    answer: string 
    option: string[]
}

export type questionPropsType = {
    question: string
    option: string[]
    callback: (e:React.FormEvent<EventTarget>, ans: string)=>void
}