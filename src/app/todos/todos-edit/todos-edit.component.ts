import { Component, OnInit } from '@angular/core';
import { Todo } from '../api';

@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.scss']
})
export class TodosEditComponent implements OnInit {
  todos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.initTodos();
  }
  initTodos(): void {
    this.todos = JSON.parse(localStorage.getItem('todos'));
    if (this.todos === null) {
      this.todos = [];
    }
    this.todos = this.todos.map(todo => {
      todo.isEdit = false
      return todo;
    });
  }
  toggleTodoEdit(item: Todo): void {
    item.isEdit = !item.isEdit;
    if (item.isEdit === false){
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
  editDone(item): void {
    item.isEdit = false;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
