import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductServices } from './products.services';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductServices],
})
export class ProductModule {}
