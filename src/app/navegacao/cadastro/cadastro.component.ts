import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
// import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { Validacao } from './validators';
import { Usuario } from 'src/app/conta/model/usuario2';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

cadastroForm: FormGroup;
usuario: Usuario;
formResult = '';
MASKS = utilsBr.MASKS;

validationMessages: ValidationMessages;
genericValidator: GenericValidator;
// displayMessage: DisplayMessage;
displayMessage: { [key: string]: string } = {};
// displayMessage: DisplayMessage;

mudancasNaoSalvas: boolean;

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: ' O Nome é requerido',
        minlength: ' O Nome precisa ter no minimo 2 caracteres',
        maxlength: ' O Nome precisa ter no maximo 16 caracteres',
      },
      cpf: {
        required: ' Informe o CPF',
        cpf: ' CPF em formato invalido'
      },
      email: {
        required: ' Informe o EMAIL',
        email: ' EMAIL invalido',
        validarEmail: ' Dominio inválido'
      },
      senha: {
        required: ' Informe a senha',
        rangeLength: ' A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: ' Informe a senha novamente',
        rangeLength: ' A senha deve possuir entre 6 e 15 caracteres',
        equalTo: ' As senhas não conferem'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);

  }


  ngOnInit(): void {
    // let nome = new FormControl('');

    // this.cadastroForm = new FormGroup({
    //   nome: new FormControl(''),
    //   cpf: new FormControl(''),
    //   email: new FormControl(''),
    //   senha: new FormControl(''),
    //   senhaConfirmacao: new FormControl('')
    // });

    const senhaControl = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    const senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senhaControl)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]], // valor do campo, validator
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email, Validacao.validarEmail]],
      // senha: ['', [Validators.required, CustomValidators.rangeLength([6,15])]],//senha de '6' a '15' caracteres
      // senhaConfirmacao: ['']
      senha: senhaControl,
      senhaConfirmacao: senhaConfirm
    });

  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements
    .map((FormControl: ElementRef) => fromEvent(FormControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
      this.mudancasNaoSalvas = true;
    });

//     var form = document.getElementById("form");
// form.addEventListener("focus", function( event ) {
//   event.target.style.background = "pink";
// }, true);
// form.addEventListener("blur", function( event ) {
//   event.target.style.background = "";
// }, true);

// console.log(this.genericValidator.processarMensagens(this.cadastroForm));
// console.log(this.displayMessage);

  }

  adicionarUsuario(){
    // let x = this.cadastroForm.value;
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value); // para fazer mapeamento de um objeto para o outro
      this.formResult = JSON.stringify(this.cadastroForm.value); // ele transforma o resultado em 'String'

      this.mudancasNaoSalvas = false;
    } else{
      this.formResult = 'Não submeteu';
    }

  }

}
