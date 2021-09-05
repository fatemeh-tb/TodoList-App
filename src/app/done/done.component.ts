import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../service/todosService.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  todoAdded: string[] = [];
  todoAddedSubscription: Subscription;

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todoAddedSubscription = this.todoService.todoAddedEvent.subscribe(data => {
      this.todoAdded.push(data)
    })
  }

}
