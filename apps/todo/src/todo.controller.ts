import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import {
  PostTodoDto,
  Todo,
  TodoServiceController,
  TodoServiceControllerMethods,
  Todos,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@TodoServiceControllerMethods()
export class TodoController implements TodoServiceController {
  constructor(private readonly todoService: TodoService) {}

  postTodo(postTodoDto: PostTodoDto): Todo | Promise<Todo> | Observable<Todo> {
    return this.todoService.postTodo(postTodoDto);
  }
  getTodos(): Todos | Promise<Todos> | Observable<Todos> {
    return this.todoService.getTodos();
  }
}
