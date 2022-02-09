
import { ValidationMessages, GenericValidator, DisplayMessage } from './../../utils/generic-form-validation';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { ContaService } from '../services/conta.service';

import { Observable, fromEvent, merge } from 'rxjs';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

  errors: any[] = [];
  cadastroForm: FormGroup;
  usuario: Usuario;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};


  constructor(private fb: FormBuilder,
    private contaService: ContaService) {
      this.validationMessages = {
        email:{
          required: 'Informe o e-mail',
          email: 'Email invalido'
        },
        password:{
          required: 'Informe a senha',
          email: 'A senha deve possuir entre 6 a 15 caracteres'
        },
        confirmPassord:{
          required: 'Informe a senha novamente',
          email: 'A senha deve possuir entre 6 a 15 caracteres',
          equalTo: 'As senhas não conferem'
        }
      };

      this.genericValidator = new GenericValidator(this.validationMessages);
    }

  ngOnInit(): void {

let senha = new FormControl('', [Validators.required, ]);
let senhaConfirm = new FormControl('', [Validators.required, ])

    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      // password: [''],
      // confirmPassword: ['']
      password: senha,
      confirmPassword: senhaConfirm
    });
  }

  ngAfterViewInit(): void {
let controlBlurs: Observable<any>[] = this.formInputElements
.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
  }

  adicionarConta() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

      this.contaService.registrarUsuario(this.usuario);
    }
  }

}
