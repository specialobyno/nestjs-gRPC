import {
  PostTodoDto,
  TODO_SERVICE_NAME,
  Todo,
  TodoServiceClient,
  Todos,
} from '@app/common';

import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class TodosService implements OnModuleInit, TodoServiceClient {
  private todoService: TodoServiceClient;
  constructor(@Inject(TODO_SERVICE_NAME) private readonly client: ClientGrpc) {}
  onModuleInit() {
    this.todoService =
      this.client.getService<TodoServiceClient>(TODO_SERVICE_NAME);
  }
  postTodo(postTodoDto: PostTodoDto): Observable<Todo> {
    return this.todoService.postTodo(postTodoDto);
  }
  getTodos(): Observable<Todos> {
    return this.todoService.getTodos({});
  }
}
