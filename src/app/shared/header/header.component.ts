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
export class HeaderComponent implements OnInit {
  constructor(private productService: ProductService) { }

  total = this.productService.totalQuantity()

  ngOnInit(): void {
    this.productService.cartChanged.subscribe(() => {
      console.log('cart changed')
      this.productService.totalQuantity()
    })
  }
}
