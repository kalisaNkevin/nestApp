import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';
import { MessagesModule } from './messages/messages.module';
import { UnlikeModule } from './likes/unlike/unlike.module';
import { CommentModule } from './comment/comment.module';
import { RatingModule } from './rating/rating.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { EmployeeModule } from './employee/employee.module';
import { PayementsModule } from './payements/payements.module';
import { LikeModule } from './like/like.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    UsersModule,
    ArticlesModule,
    MessagesModule,
    UnlikeModule,
    CommentModule,
    RatingModule,
    SubscribersModule,
    EmployeeModule,
    PayementsModule,
    LikeModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
