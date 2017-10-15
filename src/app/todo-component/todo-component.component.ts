import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['todo-component.component.scss']
})
export class TodoComponentComponent implements OnInit {

  @ViewChild("myTodo") myTodo;

  todoList = [];

  constructor() { }

  addTood() {
    console.log(this.myTodo)
    this.todoList.push({title: this.myTodo.nativeElement.value})
  }

  ngOnInit() {
  }

}
