import { Component, OnInit } from '@angular/core';
import { QuizAppService } from '../quiz-app.service';
import { IQuestion, Result } from '../Question';
import { Subject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit 
{
  selectedAnswer: string;
  selectedAns: string;
  filteredQuestions: Array<IQuestion>; //filteredQuestions=[];

  currentQNo: number;
  flag=false;
  submitFlag=false;
  correctAnsCnt=0;
  wrongAnsCnt=0;
  TotalMarks=0;
  resultObj:Result;
  btnTextToDisplay="Next";
  selectedQuiz;
  private unsubscribe$ = new Subject();

  constructor(private quizService: QuizAppService) 
  { 
    this.filteredQuestions = new Array();
  }

  ngOnInit() 
  {
    this.selectedQuiz = this.quizService.getSelectedQuiz();

    this.quizService.GetQuestions()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      (Questions: IQuestion[]) => 
      {
        this.filteredQuestions = Questions;
      }
    );

    this.currentQNo = -1;
  }

  getNextQuestion(QNo: number, userSelectedAns:string)
  {
    this.currentQNo += 1;
    this.flag=true;

    if(QNo >= 0)
    {
      if(this.filteredQuestions[QNo].answer == userSelectedAns)
        {
          this.correctAnsCnt++;
          this.TotalMarks++;
        }  
      else
        {
          this.wrongAnsCnt++;
      }
    }

    if(this.currentQNo == this.filteredQuestions.length-1)
    {  
      this.btnTextToDisplay="Submit";
    }

    if(this.currentQNo == this.filteredQuestions.length)
    {  
      this.submitFlag=true;
      this.resultObj = new Result(this.TotalMarks, this.filteredQuestions.length, this.correctAnsCnt, this.wrongAnsCnt);
      this.quizService.setResultObj(this.resultObj);
    }
  }
}
