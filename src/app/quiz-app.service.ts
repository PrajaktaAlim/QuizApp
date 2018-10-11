import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion, Result } from '../app/Question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizAppService 
{
  SelectedQuiz: string;
  //private _url:string = "/assets/data/quizQuestions.json";

  private _url:string = "/assets/data/";
  
  correctAnsCnt=0;
  wrongAnsCnt=0;
  TotalMarks=0;
  result_obj : Result;

  constructor(private http:HttpClient) { }

  setSelectedQuiz(quiz)
  {
    this.SelectedQuiz = quiz;
  }

  getSelectedQuiz() : string
  {
    return this.SelectedQuiz;
  }

  GetQuestions():Observable<IQuestion[]>
  {
    //return this.http.get<IQuestion[]>(this._url);
    return this.http.get<IQuestion[]>(this._url + this.SelectedQuiz + ".json");
  }

  setResultObj(obj: Result)
  {
    this.result_obj = new Result(obj.TotalMarks, obj.TotalQuestions, obj.correctAnsCount, obj.wrongAnsCount);
  }
  
  getResultObj() : Result
  {
    return this.result_obj;
  }
}

