import { Component, OnInit } from '@angular/core';
import { QuizAppService } from '../quiz-app.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit 
{
  public selectedQuiz;

  constructor(private quizService: QuizAppService) { }

  ngOnInit() 
  {  }

  ngOnDestroy()
  {
    this.quizService.setSelectedQuiz(this.selectedQuiz);
  }

  selectQuiz(quiz: string)
  {
    this.selectedQuiz = quiz;
  }
}
