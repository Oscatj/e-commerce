import { Component, input } from '@angular/core';
import { addIcons } from "ionicons";
import { ProductI } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  product = input.required<ProductI>();
}
