import { Component, Input, OnInit } from '@angular/core';
// import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  isHide = false;

  constructor() { }

  // @Output() list = new EventEmitter();

  // addNewItem(value) {
  //   this.list.emit(value);
  // }

  @Input() data

  ngOnInit(): void {
  }

  toggleDone(idx:number) {
    this.data.map((value, index) => {
      if(index === idx) {
        value.completed = !value.completed
      }
      return value
    });
  }

  deleteTodo (idx:number) {
    this.data = this.data.filter((value, index) => index !== idx);
  }

  filterTodos() {
    this.isHide = true;
  };

  // addTodo() {
  //   this.data.push({
  //     content: this.inputTodo,
  //     completed: false
  //   });

  //   this.inputTodo = "";
  // }

  showAll() {
    this.isHide = false
  }

}
