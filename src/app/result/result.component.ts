import { Component, OnInit } from '@angular/core';
import { QuizAppService } from '../quiz-app.service';
import { Result } from '../Question';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit 
{
  correctAnsCnt=0;
  wrongAnsCnt=0;
  TotalMarks=0;

  ResultObj:Result;

  constructor(private quizService: QuizAppService) { }

  ngOnInit() 
  {
    this.ResultObj = this.quizService.getResultObj();
  }
}
