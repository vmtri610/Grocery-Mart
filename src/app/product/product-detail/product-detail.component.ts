import {Component, Input} from '@angular/core';
import {BreadcrumbsComponent} from "../../components/breadcrumbs/breadcrumbs.component";
import {Product} from "../../models/product.model";
import {CurrencyPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    BreadcrumbsComponent,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() product!: Product | undefined;

  constructor(private productService: ProductService) {
  }

  buyProduct(product: Product | undefined) {
    this.productService.addToCart(product);
    if (product) {
      this.productService.addQuantity(product)
    }
  }

  liked(product: Product | undefined) {
    if (product) {
      this.productService.isLiked(product)
    }
  }
}
