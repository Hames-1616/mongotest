import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
        ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.DB),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
