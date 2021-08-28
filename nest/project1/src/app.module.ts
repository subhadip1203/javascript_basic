import { Module } from '@nestjs/common';
import { AppController } from './base/app.controller';
import { UserController } from './user/user.controller';
import { AppService } from './base/app.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
