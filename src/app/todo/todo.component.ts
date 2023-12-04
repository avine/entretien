import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, switchMap } from 'rxjs';
import { TodoService } from './todo.service';
import { Todo } from './todo.types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit, OnDestroy {
  todo$ = this.activatedRoute.params.pipe(
    map(({ id }) => id as string),
    switchMap((id) => this.todoService.getTodo(id)),
    // ...
  );

  subscription: Subscription = this.todo$.subscribe((todo) => {
    this.todo = todo;
  });

  todo?: Todo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
  ) {}

  ngOnInit(): void {
    console.log('INIT TODO');
  }

  ngOnDestroy(): void {
    console.log('DESTROY TODO');
  }

  fetchTodo(id: string) {
    return this.todoService.getTodo(id).subscribe((todo) => (this.todo = todo));
  }
}
