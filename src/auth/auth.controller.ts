import { Controller, Get, Post, Body, Patch, Param, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupAuthDto } from './dto/signup-auth.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBody,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Signup')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 
  @Post('signup')
  @ApiCreatedResponse({ description: 'User Registration successfuly' })
  @ApiBody({ type: SignupAuthDto })
  signup(@Body() dto: SignupAuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  @ApiOkResponse({ description: 'User Login' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials!' })
  @ApiBody({ type: SignupAuthDto })
  signin(@Body() dto: SignupAuthDto, @Req() req, @Res() res) {
    return this.authService.signin(dto, req, res);
  }

  @Get('signout')
  @ApiCreatedResponse({ description: 'User Loggedout Successfuly' })
  signout(@Req() req, @Res() res) {
    return this.authService.signout(req, res);
  }
}
