import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Todo } from './api';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todo: string;
  public todos: Todo[] = [];
  private currentMaxId: number = 0;
  constructor() { }
  ngOnInit(): void { 
    console.log('onInit');
    this.todos = JSON.parse(localStorage.getItem('todos'));
    if (this.todos === null) {
      this.todos = [];
    }
    if (this.todos.length > 0) {
      this.todos.sort(this.compare);
      this.currentMaxId = this.todos[this.todos.length - 1].id;
    }
  }

  compare(a:Todo, b:Todo): number {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  }
  addTodo(todo: string): void {
    console.log(todo);
    console.log(this.currentMaxId);
    this.currentMaxId++;
    this.todos.push({
      id: this.currentMaxId,
      content: todo,
      isDone: false
    });
    this.todo = '';
    this.saveList();
  }

  toggleTodo(todo: Todo): void {
    todo.isDone = !todo.isDone;
    this.saveList();
  }

  saveList(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
