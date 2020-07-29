import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthController } from './auth/auth.controller'
import env from './env'
import { OauthService } from './oauth/oauth.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      isGlobal: true,
      load: [env],
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, OauthService],
})
export class AppModule {}
