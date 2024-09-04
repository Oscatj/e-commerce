import { inject, Injectable } from "@angular/core";
import { ProductI } from "../../shared/interfaces/product.interface";
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from "./products.service";
import { map } from "rxjs";

interface State{
    products: ProductI[];
    status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsStateService{

    private productsService = inject(ProductsService)

    private initialState: State = {
        products: [],
        status: 'loading' as const,
    }

    state = signalSlice({
        initialState: this.initialState,  //TODO: estado inicial
        sources: [
            this.productsService
            .getProduct()
            .pipe(map(products => ({products, status: 'success' as const}))), //TODO: aqui se carga la información
        ], 
    });

}