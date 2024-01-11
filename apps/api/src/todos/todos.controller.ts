import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { PostTodoDto, Todo, Todos } from '@app/common';
import { Observable } from 'rxjs';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Post()
  postTodo(@Body() postTodoDto: PostTodoDto): Observable<Todo> {
    return this.todosService.postTodo(postTodoDto);
  }
  @Get()
  getTodos(): Observable<Todos> {
    return this.todosService.getTodos();
  }
}
