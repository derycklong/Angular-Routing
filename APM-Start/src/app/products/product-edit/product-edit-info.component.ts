import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;

  errorMessage: string;
  //product = { id: 1, productName: 'test', productCode: 'test', description: 'test' };
  product: Product
  

  constructor(private route: ActivatedRoute,
              private productService:ProductService ) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      if (this.productForm) {
        console.log('in product form')
        this.productForm.reset()
      }
      this.product = data['resolvedData']
      console.log(this.product)
    })

    console.log(this.route.parent.data)

    
  }

}
