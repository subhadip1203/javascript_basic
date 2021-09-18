import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getAllUser(): string {
    return 'all user';
  }

  @Get('/:userId')
  getUserById(@Param() param: { userId: string }): string {
    return `all user ${param.userId}`;
  }
}
