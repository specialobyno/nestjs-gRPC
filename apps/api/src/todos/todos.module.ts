import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TODO_PACKAGE_NAME, TODO_SERVICE_NAME } from '@app/common';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: TODO_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: TODO_PACKAGE_NAME,
          protoPath: join(__dirname, '../todo.proto'),
        },
      },
    ]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
