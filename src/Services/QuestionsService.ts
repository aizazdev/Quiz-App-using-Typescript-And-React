import {QuizQuestionsType, Quiz} from './../Types/QuizTypes';

export const QuestionsService = async (questions: number, difficulty: string): Promise<Quiz[]> => {
    const api = await fetch(`https://opentdb.com/api.php?amount=${questions}&category=18&difficulty=${difficulty}&type=multiple`);
    const { results } = await api.json();
    const quiz = results.map((questionObj:QuizQuestionsType)=> {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: questionObj.incorrect_answers.concat(questionObj.correct_answer)

        }
    })
    return quiz;
}   