import { Component } from '@angular/core';
import {BreadcrumbsComponent} from "../../components/breadcrumbs/breadcrumbs.component";
import {RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {CurrencyPipe} from "@angular/common";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [
    BreadcrumbsComponent, RouterLink, CurrencyPipe
  ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent {
  constructor(private productService: ProductService) { }

  products = this.productService.getCartProducts()
  subTotal = this.productService.getCartTotal()
  total = this.subTotal + 10
  totalQuantity = this.productService.totalQuantity()

  addQuantity(product: Product): void {
    this.productService.addQuantity(product)
    this.subTotal = this.productService.getCartTotal()
    this.total = this.subTotal + 10
    this.products = this.productService.getCartProducts()

  }

  removeQuantity(product: Product): void {
    this.productService.removeQuantity(product)
    this.subTotal = this.productService.getCartTotal()
    this.total = this.subTotal + 10
    this.products = this.productService.getCartProducts()
    this.products = this.productService.getCartProducts()
    this.totalQuantity = this.productService.totalQuantity()
  }

  removeProduct(product: Product): void {
    this.productService.removeProduct(product)
    this.subTotal = this.productService.getCartTotal()
    this.total = this.subTotal + 10
    this.products = this.productService.getCartProducts()
    this.totalQuantity = this.productService.totalQuantity()
  }
}
