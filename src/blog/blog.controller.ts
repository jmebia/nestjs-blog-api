import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('posts') // prefix of the route
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll() {

    return this.blogService.findAll();
  }

  @HttpPost()
  create(@Body() body: { title: string; content: string }) {
    return this.blogService.create(body.title, body.content);
  }
}
