import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/services/base-http.service";
import { Observable } from "rxjs";
import { ProductI } from "../../shared/interfaces/product.interface";

@Injectable()
export class ProductsService extends BaseHttpService{
    getProduct(): Observable<ProductI[]>{
        return this.http.get<any[]>(`${this.apiUrl}/products`);
    }
}