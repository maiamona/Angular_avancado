// #docregion
import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
  override; controlType = 'checkbox';
}
