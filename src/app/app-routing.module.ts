import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicsComponent } from './topics/topics.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'topics', component: TopicsComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'result', component: ResultComponent},
  //Default component
  { path: '', redirectTo: '/topics', pathMatch: 'full'},
  //wildcard component
  { path: '**', component: TopicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
