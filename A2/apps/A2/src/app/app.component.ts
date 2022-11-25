import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";
//import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";
import {tap} from "rxjs";
//import {products} from "./data/products";
//import {products as data} from './data/products'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Магазин';
  // products: IProduct[] = [] //data
  loading: boolean = false
  // products$: Observable<IProduct[]>
  term =''
  products: IProduct[];

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {
  }
  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(() =>{
      this.loading = false
    })
   this.products$ =  this.productsService.getAll().pipe(
     tap(()=>this.loading = false)
   )
  }
}
