import { Component } from "@angular/core";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent{
  public isCollapsed: boolean;

  constructor(){
    this.isCollapsed = true;
  }

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true,
      admin: true
    },
    {
      link: '/cadastro',
      name: 'Cadastro',
      exact: true,
      admin: true
    },
    {
      link: '/formulario',
      name: 'Formulario',
      exact: true,
      admin: true
    },
    {
      link: '/produtos',
      name: 'Produtos',
      exact: true,
      admin: true
    },
    {
      link: '/filmes',
      name: 'Filmes',
      exact: true,
      admin: true
    },
    {
      link: '/bar',
      name: 'Bar',
      exact: true,
      admin: true
    },
    {
      link: '/todo',
      name: 'Tarefas',
      exact: true,
      admin: true
    },
    {
      link: '/contador',
      name: 'Contador',
      exact: true,
      admin: true
    },
    {
      link: '/admin',
      name: 'Admin',
      exact: true,
      admin: true
    },
  ];
}

interface Nav{
  link: string;
  name: string;
  exact: boolean;
  admin: boolean;
}
