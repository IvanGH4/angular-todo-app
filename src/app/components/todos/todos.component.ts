import { Component, OnInit } from '@angular/core';
import { Todo } from './../../modules/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  inputTodo:string = "";
  cats = ['All', 'Completed', 'Uncompleted'];
  isHide = false;

  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

  noTodos() {
    return this.todos.length === 0;
  }

  toggleDone(idx:number) {
    this.todos.map((value, index) => {
      if(index === idx) {
        value.completed = !value.completed
      }
      return value
    });
  }

  deleteTodo (idx:number) {
    this.todos = this.todos.filter((value, index) => index !== idx);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

  filterTodos() {
    this.isHide = true;
  };

  showAll() {
    this.isHide = false
  }
  
}
