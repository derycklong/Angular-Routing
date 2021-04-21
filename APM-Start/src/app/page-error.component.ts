import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <h1>Error: </h1>
    {{errorMessage}}
    `
})
export class PageErrorComponent implements OnInit{
    errorMessage:string
    constructor(private route:ActivatedRoute){}
    ngOnInit(){
        this.errorMessage = this.route.snapshot.paramMap.get('error')

    }
 }
