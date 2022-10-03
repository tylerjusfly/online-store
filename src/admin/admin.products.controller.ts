import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  UseInterceptors,
  UploadedFile,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from 'src/providers';
import { Product } from 'src/models';

@Controller('admin/products')
export class AdminProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  @Render('admin/products/index')
  async index() {
    const viewData = [];
    viewData['title'] = 'Admin Page - Admin';
    viewData['products'] = await this.productService.findAll();
    return { viewData };
  }

  @Post('store')
  @UseInterceptors(FileInterceptor('image', { dest: './public/uploads' }))
  @Redirect('/admin/products')
  async store(@Body() body, @UploadedFile() file: Express.Multer.File) {
    const newProduct = new Product();

    newProduct.setName(body.name);
    newProduct.setPrice(body.price);
    newProduct.setImage(file.filename);
    newProduct.setDescription(body.description);

    await this.productService.createOrUpdate(newProduct);
  }

  @Post(':id')
  @Redirect('/admin/products')
  remove(@Param('id') id: number) {
    return this.productService.delete(id);
  }

  @Get(':id')
  @Render('admin/products/edit')
  async editProduct(@Param('id') id: number) {
    const viewData = [];
    viewData['title'] = 'Admin Page - Edit Product';
    viewData['product'] = await this.productService.findOne(id);

    return { viewData };
  }

  @Post(':id/update')
  @UseInterceptors(FileInterceptor('image', { dest: './public/uploads' }))
  @Redirect('/admin/products')
  async update(
    @Body() body,
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number,
  ) {
    const product = await this.productService.findOne(id);
    product.setName(body.name);
    product.setPrice(body.price);
    product.setDescription(body.description);

    if (file) {
      product.setImage(file.filename);
    }
    await this.productService.createOrUpdate(product);
  }
}
