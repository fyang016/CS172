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
  zoomSetting:int;
  zoomSetting = 6;

  ngOnInit() {
      this.articleService.getIpAddress().subscribe(data => {
        console.log(data.latitude);
        console.log(data.longitude);
        this.lati = data.latitude;
        this.long = data.longitude;
    });
  }

  search(query: string) {
    this.lastSearch = query;

    this.zoomSetting = 3;

    this.articleService.getArticles(query)
        .subscribe(articles => this.articles = articles);


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
