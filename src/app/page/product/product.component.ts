import { Component, OnInit } from '@angular/core';
import { ProductdetialsService } from 'src/app/services/productdetials.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service:ProductdetialsService) { }
  productDetials:any;

  ngOnInit(): void {
    this.productDetials = this.service.productsdata;
  }

}
