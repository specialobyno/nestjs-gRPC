import { PostTodoDto, Todo, Todos } from '@app/common';

import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class TodoService implements OnModuleInit {
  private readonly todos: Todo[] = [];
  onModuleInit() {
    for (let i = 1; i <= 100; i++)
      this.postTodo({ description: `TODO ${i}`, isDone: false });
  }
  postTodo(postTodoDto: PostTodoDto): Todo {
    const todo: Todo = {
      id: this.todos.length + 1,
      ...postTodoDto,
    };
    this.todos.push(todo);
    return todo;
  }
  getTodos(): Todos {
    return { todos: this.todos };
  }
}
