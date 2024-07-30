import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { AppController } from './controller/app.controller';
import { ButtonController } from './controller/button.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: false,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
  ],
  controllers: [AppController,ButtonController],
  providers: [AppService],
})
export class AppModule {}
