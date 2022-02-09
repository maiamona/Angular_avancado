import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

export class Validacao {
  static validarEmail(control: FormControl) {
    const email = control.value;
    if (email && email.indexOf('@') != -1) {
      const [_, dominio] = email.split('@');
      if (dominio === 'hotmail.com') {
        return {
          dominioValido: true
        };
      } else {
        return {
          dominioValido: false
        };
      }
    }
    return null;
  }
  static validarEmailModelo(): ValidatorFn {
    return (control: AbstractControl) => {
      const email = control.value;
      if (email && email.indexOf('@') != -1) {
        const [_, dominio] = email.split('@');
        if (dominio === 'hotmail.com') {
          return null;
        } else {
          return {
            dominioValido: {
              valid: false
            }
          };
        }
      }
      return null;
    };
  }
}
