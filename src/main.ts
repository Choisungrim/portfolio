import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.setBaseViewsDir(join(__dirname, '..', 'views')); // views 디렉토리 설정
    app.setViewEngine('ejs'); // EJS 템플릿 엔진 설정
    app.enableCors(); // CORS 설정 추가

    // Swagger 설정
    const config = new DocumentBuilder()
        .setTitle('API 문서')
        .setDescription('API 설명')
        .setVersion('1.0')
        .addTag('tags') // 필요에 따라 태그 추가
        .build();

    SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config), {
      swaggerOptions: { defaultModelsExpandDepth: -1, tagsSorter: 'alpha' }
    });
    await app.listen(3000);
}
bootstrap();
