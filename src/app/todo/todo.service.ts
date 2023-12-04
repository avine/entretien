import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { Todo } from './todo.types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  interval$ = interval(2000);

  constructor(private httpClient: HttpClient) {}

  getTodo(id: number | string) {
    return this.httpClient.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
