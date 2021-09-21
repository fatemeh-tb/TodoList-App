import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todosService.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  inputTodo: string = "";
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Go To Gym'
      },
      {
        content: 'Meeting With Client'
      },
      {
        content: 'Call Boss'
      },
      {
        content: 'Plan My Trip'
      },
      {
        content: 'Read Book'
      },
      {
        content: 'Walk The Dog'
      },
      {
        content: 'Pass The Exam'
      },
      {
        content: 'Draw A Painting'
      }
    ]
  }

  addNewTodo() {
    this.todos.push({
      content: this.inputTodo
    });

    this.inputTodo = "";
  }

  onDeleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  onAddedTodo(data: string, id: number) {
    this.todoService.addedTodo(data);
    this.todos.splice(id, 1)
  }

}
