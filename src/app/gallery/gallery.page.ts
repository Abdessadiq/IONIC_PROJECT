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
  public size:number=10;
  public dataImages: any[] =[];
  public totalPages: number=1;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }


  private doSearch() {
    this.httpClient.get<PixabayResponse>("https://pixabay.com/api/?key=36624956-e2a9b46e9b0921cb5a52d3f39&q="
      +this.keyword+"&per_page="+this.size+"&page="+this.currenPage)
      .subscribe(data => {
          data.hits.forEach(pic => {
            this.dataImages.push(pic);
            this.totalPages=data.totalHits/this.size;
          });
        },
        err => {
          console.log(err);
        })
  }
  onLoadImages() {
    this.dataImages=[];
    this.currenPage=1;
    this.totalPages=0;
    this.doSearch();

  }

  loadData(event: any) {
    console.log(this.currenPage+"/"+this.totalPages);
    if (this.currenPage < this.totalPages){
      ++this.currenPage;
      this.doSearch();
      event.target.complete();
    }
   if (this.currenPage>=this.totalPages)
     event.target.disabled=true;
  }

}

interface PixabayResponse {
  hits: any[]; // Remplacez 'any' par le type approprié pour les objets 'pic'
  totalHits:number;
}

