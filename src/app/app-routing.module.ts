import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodosEditComponent } from './todos/todos-edit/todos-edit.component';


const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'todos/edit', component: TodosEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
