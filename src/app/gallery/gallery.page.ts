import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  public keyword:any;
  public currenPage:number=1;
  public size:number=13;
  public dataImages: any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  onLoadImages() {
  this.httpClient.get("https://pixabay.com/api/?key=36624956-e2a9b46e9b0921cb5a52d3f39&q="
    +this.keyword+"&per_page="+this.size+"&page="+this.currenPage)
    .subscribe(data=>{
      this.dataImages=data;
    }, err=>{
      console.log(err);
    })
  }
}
