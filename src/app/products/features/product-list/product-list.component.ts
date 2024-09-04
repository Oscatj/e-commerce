import { Component, inject} from '@angular/core';
import { ProductsStateService } from '../../services/products-state.service';
import { ProductsService } from '../../services/products.service';
import { addIcons } from "ionicons";
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [ProductCardComponent],
  providers: [ProductsStateService, ProductsService]
})
export default class ProductListComponent {
  productsState = inject(ProductsStateService);
}
