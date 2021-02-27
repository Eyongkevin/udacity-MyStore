import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartProduct } from '../../models/CartProduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedOption: string = '';

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(res =>{
      this.products = res;
    })
  }
  onSubmit(id: number, event: any): boolean{
    this.selectedOption = event.target[0].options[event.target[0].options.selectedIndex].value;
    const cartProduct: CartProduct[] = [{id: id, option: this.selectedOption}]
    this.productService.addToCart(cartProduct)
    this.printLocalData();
    return false;
  }
  printLocalData(): void{
    console.log(this.productService.getCartProduct())
  }

}
