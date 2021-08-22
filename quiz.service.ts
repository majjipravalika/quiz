import { Injectable } from '@angular/core';
import{Quiz} from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes:Quiz[]=[{
    question:"what are using html in stylesheet",
    answer:[
      {option:"mss", correct:false },
      {option:"tss",correct:false},
      {option:"css",correct:true},
      {option:"ptc",correct:false},
    ]

  },
  {
    question:"what are using html in sheet",
    answer:[
      {option:"ms", correct:false },
      {option:"tss",correct:false},
      {option:"ss",correct:true},
      {option:"ptc",correct:false},
    ]

  },
  {
    question:"what are using html in stylesheet",
    answer:[
      {option:"mss", correct:false },
      {option:"tss",correct:false},
      {option:"css",correct:true},
      {option:"ptc",correct:false},
    ]

  },
  {
    question:"what are using html in stylesheet",
    answer:[
      {option:"mss", correct:false },
      {option:"tss",correct:false},
      {option:"css",correct:true},
      {option:"ptc",correct:false},
    ]

  },
  {
    question:"what are using html in stylesheet",
    answer:[
      {option:"mss", correct:false },
      {option:"tss",correct:false},
      {option:"css",correct:true},
      {option:"ptc",correct:false},
    ]

  },
 
]
 
  constructor() {}
    getQuizzes(){
      return this.quizzes;
    }
   
}
