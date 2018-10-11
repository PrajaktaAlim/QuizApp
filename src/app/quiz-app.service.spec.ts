import { TestBed, inject } from '@angular/core/testing';

import { QuizAppService } from './quiz-app.service';

describe('QuizAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizAppService]
    });
  });

  it('should be created', inject([QuizAppService], (service: QuizAppService) => {
    expect(service).toBeTruthy();
  }));
});
