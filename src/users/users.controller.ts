import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // prefix of the route
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findOne(id : number) {
    return this.userService.findOne(id);
  }

}