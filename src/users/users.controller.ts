import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators';

@ApiTags('Signup')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get()
  @ApiOkResponse({ description: 'User Generated' })
  getUsers() {
    return this.usersService.getUsers();
  }
}
