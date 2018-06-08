import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { ArticleService } from './article.service';
import { Article } from './article';
import { Observable, Subject } from 'rxjs';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  lastSearch: string;



  constructor(private articleService: ArticleService) { }

  lati:any;
  long:any;

  multiLati: any[] = [];
  multiLong: any[] = [];
  zoomSetting = 7;

  R: number;
  phi1: number;
  phi2: number;
  deltaPhi: number;
  deltaLambda: number;
  partA: number;
  partC: number;
  partD: number;

  ngOnInit() {
      this.articleService.getIpAddress().subscribe(data => {
        console.log(data.latitude);
        console.log(data.longitude);
        this.lati = +data.latitude;
        this.long = +data.longitude;
    });
  }

  toRadians(num): number {
      return num * 2 * Math.PI / 180;
    }

  calculateDistance(lat1, lat2, lon1, lon2): number {
      this.R = 6371000;
      this.phi1 = this.toRadians(lat1);
      this.phi2 = this.toRadians(lat2);
      this.deltaPhi = this.toRadians(lat2 - lat1);
      this.deltaLambda = this.toRadians(lon2 - lon1);

      this.partA = Math.sin(this.deltaPhi / 2) * Math.sin(this.deltaPhi / 2) +
        Math.cos(this.phi1) * Math.cos(this.phi2) * Math.sin(this.deltaLambda / 2) *
        Math.sin(this.deltaLambda / 2);

      this.partC = 2 * Math.atan2(Math.sqrt(this.partA), Math.sqrt(1-this.partA));
      this.partD = this.R * this.partC;

      console.log(this.partD);
      return this.partD;
    }


  x = 0;
  search(query: string) {
    this.lastSearch = query;

    this.articleService.getArticles(query)
        .subscribe(articles => {
          this.articles =  articles;
          console.log(this.articles);
          console.log(this.articles.length);

          this.multiLati = [];
          this.multiLong = [];



          for (this.x = 0; this.x < articles.length; this.x++) {
          // if distance is less than 100
            console.log("this.lati ", this.lati);
            // very messy code! I switch up latitude and longitude a few times here and in
            // other places
            if ( this.calculateDistance(this.lati, articles[this.x].lng,
              this.long, articles[this.x].lat) <= 160934) {
                // console.log("the distance is less the 100 miles hopefully")
                this.multiLati.push(+articles[this.x].lat);
                            this.multiLong.push(+articles[this.x].lng);
              }

          }
          console.log(this.multiLati);
          console.log(this.multiLong);
          console.log(typeof this.multiLati[0]);
         });


  }

  chosenLatitude = 52.00;
  chosenLongitude = 7.91;
  locationChosen = false;

  onChoseLocation(event) {
    this.chosenLatitude = event.coords.lat;
    this.chosenLongitude = event.coords.lng;
    this.locationChosen = true;
  }



}
