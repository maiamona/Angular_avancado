// #docregion
import { QuestionBase } from './question-base';

export class TextareaQuestion extends QuestionBase<string> {
  override; controlType = 'textarea';
}
