import { RadioQuestion } from './question-radio';
// #docregion
import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { CheckboxQuestion } from './question-checkbox';
import { TextareaQuestion } from './question-textarea';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      }),

      new CheckboxQuestion({
        key: 'agree',
        label: 'I accept terms and services',
        type: 'checkbox',
        required: true,
        order: 3
      }),

      new RadioQuestion({
        key: 'sexo',
        label: 'Sex',
        type: 'radio',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'}
        ],
        order: 4
      }),

      new TextareaQuestion({
        controlType: 'textarea',
        key: 'message',
        label: 'Mesage',
        type: 'textarea',
        order: 5
      })

    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
