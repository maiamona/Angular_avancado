import { QuestionService } from './../dynamic-form-question/question.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../dynamic-form-question/question-base';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [QuestionService]
})
export class FormularioComponent implements OnInit {

questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
   }

  ngOnInit(): void {
  }

}
