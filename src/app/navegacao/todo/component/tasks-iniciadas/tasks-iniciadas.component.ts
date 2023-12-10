import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

iniciadas$: Observable<any[]>;

  constructor(private tasksService: TasksService, private store: Store) { }

  ngOnInit(): void {
    // this.iniciadas$ = this.tasksService.getTodoList$;
    this.iniciadas$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => task.iniciado && !task.finalizado)));
  }

  onToggle(event){
    this.tasksService.toggle(event);

    setTimeout(() => {
      window.location.reload();
    }, 0);
  }

}
