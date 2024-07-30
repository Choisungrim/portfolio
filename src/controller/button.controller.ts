import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation,ApiBody } from '@nestjs/swagger';
import { AppService } from '../app.service';

@Controller('button') // 버튼 관련 요청을 처리하는 컨트롤러
export class ButtonController {
  @Post('career') // "/button/career" 경로로 POST 요청을 처리
  handleCareerButton(@Body() body: { message: string }) {
    // 경력 버튼 클릭 시 처리할 로직
    return { response: '경력 정보가 전송되었습니다.' };
  }

  @Post('skill') // "/button/skill" 경로로 POST 요청을 처리
  handleSkillButton(@Body() body: { message: string }) {
    // 기술 버튼 클릭 시 처리할 로직
    return { response: '기술 정보가 전송되었습니다.' };
  }

  @Post('response')
  @ApiOperation({ summary: 'button event' })
  @ApiBody({ type: String })
  @ApiResponse({ status: 201, description: '응답반환' })
  @ApiResponse({ status: 400, description: '잘못된 요청' })
  getResponse(@Body() body: { key: string }): { response: string } {
    let responseMessage = '';

    // body.key에 따라 응답 메시지 결정
    if (body.key === 'Carrer') { // 'Carrer'로 수정
      responseMessage = '123';
    } else if (body.key === 'Skill') {
      responseMessage = '456';
    } else {
      responseMessage = '400';
    }

    return { response: responseMessage };
  }
}
