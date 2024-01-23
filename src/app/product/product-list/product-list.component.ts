import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product.model";
import {CurrencyPipe, DecimalPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    DecimalPipe, RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  @Input() product!: Product[];
  constructor(private productService: ProductService) {
  }

  view(product: Product) {
    this.productService.getViewedProducts(product) ;
  }
}
