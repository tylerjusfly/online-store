import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get('/')
  @Render('admin/index')
  adminIndex() {
    const viewData = [];
    viewData['title'] = 'Admin Page - Admin';

    return { viewData };
  }
}
