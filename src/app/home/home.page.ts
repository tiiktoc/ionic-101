import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList: Array<String> = []
  todoInput: String = ""
  constructor() { }
  addItem() {
    if (this.todoInput !== "") {
      this.todoList.push(this.todoInput)
      this.todoInput = ""
    }
  }
  deleteItem(index) {
    this.todoList.splice(index, 1)
  }
}
