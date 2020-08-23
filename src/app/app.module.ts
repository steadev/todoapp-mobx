import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

import { MobxAngularModule }  from 'mobx-angular';
import { TodosEditComponent } from './todos/todos-edit/todos-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobxAngularModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
