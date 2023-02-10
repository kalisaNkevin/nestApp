import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { SignAuth } from './dto/signup-auth.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBody,
  ApiTags,
} from '@nestjs/swagger';

import { Public, GetCurrentUserId, GetCurrentUser } from '../common/decorators';
import { RtGuard } from '../common/guards';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/signin-auth.dto';
import { Tokens } from './types';

@ApiTags('Signup')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('signup')
  @ApiCreatedResponse({ description: 'User Registration successfuly' })
  @ApiBody({ type: AuthDto })
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }
  @Public()
  @Post('signin')
  @ApiOkResponse({ description: 'User Login' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials!' })
  @ApiBody({ type: SignAuth })
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: SignAuth): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }
  @Post('signout')
  @ApiCreatedResponse({ description: 'User Loggedout Successfuly' })
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: number): Promise<boolean> {
    return this.authService.logout(userId);
  }
  @Post('forgort password')
  @ApiCreatedResponse({ description: 'User Registration successfuly' })
  @ApiBody({ type: AuthDto })
  frogotPassword(@Body() dto: AuthDto) {
    return this.authService.signinLocal(dto);
  }
  @Post('reset password')
  @ApiCreatedResponse({ description: 'User Registration successfuly' })
  @ApiBody({ type: AuthDto })
  resetPassword(@Body() dto: AuthDto) {
    return this.authService.signinLocal(dto);
  }
  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
