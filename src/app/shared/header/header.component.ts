import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  totalProduct = 0;
  totalLike = 0;
  constructor(private productService: ProductService) {
    this.totalProduct = this.productService.totalQuantity();
    this.totalLike = this.productService.totalLikeProducts();

    this.productService.cartChanged.subscribe(() => {
      this.totalProduct = this.productService.totalQuantity();
    });

    this.productService.likeChanged.subscribe(() => {
      this.totalLike = this.productService.totalLikeProducts();
    })
  }






}
