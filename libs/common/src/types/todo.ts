/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "todo";

export interface Empty {
}

export interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

export interface Todos {
  todos: Todo[];
}

export interface PostTodoDto {
  description: string;
  isDone: boolean;
}

export const TODO_PACKAGE_NAME = "todo";

export interface TodoServiceClient {
  postTodo(request: PostTodoDto, metadata?: Metadata): Observable<Todo>;

  getTodos(request: Empty, metadata?: Metadata): Observable<Todos>;
}

export interface TodoServiceController {
  postTodo(request: PostTodoDto, metadata?: Metadata): Promise<Todo> | Observable<Todo> | Todo;

  getTodos(request: Empty, metadata?: Metadata): Promise<Todos> | Observable<Todos> | Todos;
}

export function TodoServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["postTodo", "getTodos"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("TodoService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("TodoService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const TODO_SERVICE_NAME = "TodoService";
