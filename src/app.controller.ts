import { Controller, Get, Render } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  @Render('index')
  indexPage() {
    const viewData = [];
    viewData['title'] = 'HomePage - Online Store';

    /*Index Method will run index View */
    return { viewData };
  }

  @Get('about')
  @Render('about')
  aboutPage() {
    const viewData = [];
    viewData['description'] = 'This is an about page for Stores';
    viewData['subtitle'] = 'About us';
    viewData['author'] = 'Developed by: TylerJusfly';
    viewData['title'] = 'About-Page';

    return { viewData };
  }
}
