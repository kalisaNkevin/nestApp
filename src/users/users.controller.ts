import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UsersService } from './users.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Role } from 'src/auth/entities/role.enum';
import { Roles } from 'src/auth/usr-decoractor';

@ApiTags('Signup')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOkResponse({ description: 'User information' })
  @ApiUnauthorizedResponse({ description: 'Unauthorised' })
  getMyUser(@Param() params: { id: string }, @Req() req) {
    return this.usersService.getMyUser(params.id, req);
  }
  @Get()
  @Roles(Role.ADMIN)
  @ApiOkResponse({ description: 'User Generated' })
  getUsers() {
    return this.usersService.getUsers();
  }
}
