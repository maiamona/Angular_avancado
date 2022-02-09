// #docregion
import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {
  override; controlType = 'radio';
}
