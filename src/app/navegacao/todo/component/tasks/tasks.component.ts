import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

todoList$: Observable<any[]>;// é uma coleçao de alguma coisa
subscription: Subscription;

  constructor(private tasksService: TasksService, private store: Store) { }

  ngOnInit(): void {
    // this.todoList$ = this.tasksService.getTodoList$;
    this.todoList$ = this.tasksService.getTodoList$
    .pipe(
      map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));

    this.subscription = this.tasksService.getTodoList$.subscribe();
  }



  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onToggle(event){
    this.tasksService.toggle(event);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

}
