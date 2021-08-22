import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes:Quiz[]=[];
currentQuiz=0;
answerSelected=false;
correctAnswer=0;
incorrectAnswer=0;

randomize:number=0;

result=false;
  constructor(private quizserver:QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizserver.getQuizzes();
    this.randomize=Math.floor(Math.random() * this.quizzes.length)
  }
  
onAnswer(option:boolean){
  console.log(option);
  
  this.answerSelected=true;
  setTimeout(()=>{
  this.currentQuiz++;
this.answerSelected=false;
  },
  3000);
  if(option)
  {
    this.correctAnswer++;
  }else{
    this.incorrectAnswer++;
  }
}

showResult(){
  this.result=true;

}


}
