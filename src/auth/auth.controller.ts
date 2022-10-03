import { Controller, Post, Render, Get, Redirect, Body } from '@nestjs/common';
import { User } from 'src/models';
import { UserService } from 'src/providers/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Get('register')
  @Render('auth/register')
  register() {
    const viewData = [];
    viewData['title'] = 'Register - User';
    viewData['subtitle'] = 'User Register';

    return { viewData };
  }

  @Post('store')
  @Redirect('/')
  async store(@Body() body) {
    /**Create Users */
    const newUser = new User();
    newUser.setName(body.name);
    newUser.setEmail(body.email);
    newUser.setPassword(body.password);
    newUser.setRole('client');
    newUser.setBalance(1000);

    await this.userService.createOrUpdate(newUser);
  }
}
