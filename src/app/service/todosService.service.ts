import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TodoService {

    todoAddedEvent = new Subject<string>();

    addedTodo(data: any) {
        this.todoAddedEvent.next(data)
    }

}
