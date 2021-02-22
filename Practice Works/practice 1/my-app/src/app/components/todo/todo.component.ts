import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos!: Todo[];
  inputToDo!: string;

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      content: 'first task',
      completed: false
    }];
  }

  toggleDone(id: number) {
    this.todos[id].completed = !this.todos[id].completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter( (todo: Todo, i: number) => i !== id);
  }

  addTodo() {
    if (this.inputToDo !== '') {
      this.todos.push({
        content: this.inputToDo,
        completed: false
      });
      this.inputToDo = '';
  }
  }

}
