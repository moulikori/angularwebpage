import { Component, OnInit } from '@angular/core';
import { ProductdetialsService } from 'src/app/services/productdetials.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ProductdetialsService) { }
  productDetials:any;
  ngOnInit(): void {
    this.productDetials = this.service.productsdata; 
  }

}
