import { Component, OnInit } from '@angular/core';
import { ProductdetialsService } from 'src/app/services/productdetials.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Array<Product>;  

  constructor(private productdetial:ProductdetialsService) { }
  productDetials:any;

  ngOnInit(): void {
    
    this.product.getProducts().subscribe((data: any[]) => {
      
      this.productdetial = (data as any).products;   
    });
  }

}
