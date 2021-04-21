import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import { ProductResolved,Product } from './product'
import { ProductService } from './product.service'

@Injectable({
    providedIn:'root'

})

export class ProductResolver implements Resolve<Product>{
    
    constructor(private productService: ProductService, private router:Router){}

    resolve(route:ActivatedRouteSnapshot): Observable<any>{

        const id = route.paramMap.get('id')
        return this.productService.getProduct(+id).pipe(
            catchError(error=> {
                console.error(error)
                //return this.router.navigate(['/error'],{ queryParams: { error: error } }) //queryparams
                return this.router.navigate(['/error',{error: error} ]) //optional params
            })

        )

    }
    
}