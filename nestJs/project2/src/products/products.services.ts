import { Injectable } from '@nestjs/common';
import { Product } from './products.type';

@Injectable()
export class ProductServices {
  allproducts: Product[] = [];
  //   get all products
  getAllProduct() {
    return this.allproducts;
  }
  // insert a product
  insertProduct(title: string, desc: string, price: number) {
    const fakeId = '' + Math.floor(+new Date() / 1000);
    const newProduct = new Product(fakeId, title, desc, price);
    this.allproducts.push(newProduct);
    return newProduct;
  }
}
