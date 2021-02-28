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
  cartProducts: CartProduct[] | [] = [];
  product_count: string[] = product_count;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartProducts = this.productService.getCartProduct();
    console.log("all carts: ", this.cartProducts)
  }
  selectChange(id: number, event: any): void{
    const selectedOption = event.target.options[event.target.options.selectedIndex].value;
    const cartIdx = this.cartProducts? this.cartProducts.findIndex(cart => cart.id === id): -1;
    cartIdx != -1 && this.cartProducts.length > 0 ? this.cartProducts[cartIdx].option = selectedOption: null;
    this.cartProducts? this.productService.addToCart(this.cartProducts): null;

  }
  removeCart(id: number): void{
    const cartIdx = this.cartProducts? this.cartProducts.findIndex(cart => cart.id === id): -1;
    if(cartIdx != -1 && this.cartProducts.length > 0){
      this.cartProducts.splice(cartIdx,1)
      this.productService.addToCart(this.cartProducts)
    }
  }

}
