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
import { RolesGuard } from './auth/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
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
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
