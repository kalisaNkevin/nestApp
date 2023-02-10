import { Controller, Get, Param, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Signup')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @ApiOkResponse({ description: 'User information' })
  @ApiUnauthorizedResponse({ description: 'Unauthorised' })
  getMyUser(@Param() params: { id: number }, @Req() req) {
    return this.usersService.getMyUser(params.id, req);
  }
  @Get()
  @ApiOkResponse({ description: 'User Generated' })
  getUsers() {
    return this.usersService.getUsers();
  }
}
