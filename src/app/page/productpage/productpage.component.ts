import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdetialsService } from 'src/app/services/productdetials.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:ProductdetialsService) { }
  getproductId:any;
  productDetials:any;
  ngOnInit(): void {
    this.getproductId = this.param.snapshot.paramMap.get('id');
    console.log(this.getproductId,'getproduct');
    if(this.getproductId)
    {
      this.productDetials = this.service.productsdata.filter((value)=>{
        return value.id == this.getproductId;
      });
      console.log(this.productDetials,'productDetials')

    }
  }

}
