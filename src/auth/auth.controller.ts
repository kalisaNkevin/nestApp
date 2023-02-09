import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupAuthDto } from './dto/signup-auth.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBody,
  ApiTags,
} from '@nestjs/swagger';
import { SigninAuthDto } from './dto/signin-auth.dto';
import { Role } from './entities/role.enum';
import { Roles } from './usr-decoractor';

@ApiTags('Signup')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @Roles(Role.ADMIN)
  @ApiCreatedResponse({ description: 'User Registration successfuly' })
  @ApiBody({ type: SignupAuthDto })
  signup(@Body() dto: SignupAuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  @Roles(Role.ADMIN)
  @ApiOkResponse({ description: 'User Login' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials!' })
  @ApiBody({ type: SigninAuthDto })
  signin(@Body() dto: SigninAuthDto, @Req() req, @Res() res) {
    return this.authService.signin(dto, req, res);
  }

  @Get('signout')
  @ApiCreatedResponse({ description: 'User Loggedout Successfuly' })
  signout(@Req() req, @Res() res) {
    return this.authService.signout(req, res);
  }
  @Post('forgort password')
  @ApiCreatedResponse({ description: 'User Registration successfuly' })
  @ApiBody({ type: SignupAuthDto })
  frogotPassword(@Body() dto: SignupAuthDto) {
    return this.authService.signup(dto);
  }
  @Post('reset password')
  @ApiCreatedResponse({ description: 'User Registration successfuly' })
  @ApiBody({ type: SignupAuthDto })
  resetPassword(@Body() dto: SignupAuthDto) {
    return this.authService.signup(dto);
  }
}
