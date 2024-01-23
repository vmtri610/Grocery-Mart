import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {LandingPageComponent} from "./page/landing-page/landing-page.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";
import {ProductPageComponent} from "./page/product-page/product-page.component";
import {CheckoutPageComponent} from "./page/checkout-page/checkout-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LandingPageComponent, ProductDetailComponent, ProductPageComponent, CheckoutPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GroceryMart';
}
