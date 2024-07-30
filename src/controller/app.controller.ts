import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation,ApiBody } from '@nestjs/swagger';
import { AppService } from '../app.service';

@Controller()
@ApiTags('response')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @ApiOperation({ summary: 'main page' })
  @Render('index') // index.ejs 파일을 렌더링
  root() {
    return { title: '내 프로필', name: '홍길동' };; // HTML에 전달할 데이터
  }
}
