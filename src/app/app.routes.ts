import { Routes } from '@angular/router';
import { ProductPageComponent} from "./page/product-page/product-page.component";
import {LandingPageComponent} from "./page/landing-page/landing-page.component";
import {CheckoutPageComponent} from "./page/checkout-page/checkout-page.component";

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'product',
    component: ProductPageComponent
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  }
];
