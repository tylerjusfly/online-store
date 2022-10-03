import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { ProductService } from './providers';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  @Render('products/index')
  async productIndex() {
    const viewData = [];
    viewData['title'] = 'Products';
    viewData['subtitle'] = 'List of products';
    viewData['products'] = await this.productService.findAll();

    return { viewData };
  }

  @Get('/:id')
  async singleProduct(@Param() params, @Res() res) {
    /**Grabbing id from params*/
    const product = await this.productService.findOne(params.id);

    if (!product) {
      return res.redirect('/products');
    }

    const viewData = [];
    viewData['title'] = product.getName(); /*Accessing product Properties */
    viewData['subtitle'] = product.getName() + ' - Product Information';
    viewData['product'] = product;

    return res.render('products/show', { viewData });
  }
}
