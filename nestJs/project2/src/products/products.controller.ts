import { Controller, Body, Post, Get } from '@nestjs/common';
import { ProductServices } from './products.services';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductServices) {}

  @Get()
  addProducts() {
    return this.productService.getAllProduct();
  }

  @Post()
  addProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ) {
    const result = this.productService.insertProduct(
      productTitle,
      productDescription,
      productPrice,
    );
    return { ...result };
  }
}
