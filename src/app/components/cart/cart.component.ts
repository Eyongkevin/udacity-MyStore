import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product, product_count } from '../../models/Product';
import { CartProduct } from '../../models/CartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[]= [];
  cartProducts: CartProduct[] | null = null;
  product_count: string[] = product_count;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartProducts = this.productService.getCartProduct();
    console.log("all carts: ", this.cartProducts)
  }

}
