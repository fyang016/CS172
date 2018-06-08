import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { MyUserServService } from './my-user-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyUserServService]
})
export class AppComponent implements OnInit {

  constructor(private userService: MyUserServService) { }
  

  lati:any;
  long:any;
 



  ngOnInit(): void {
    console.log("ip");
    this.userService.getIpAddress().subscribe(data => {
      console.log(data.latitude); 
      console.log(data.longitude);
      this.lati = data.latitude;
      this.long = data.longitude;
    });
    
  }
  
  title = 'Tweet Search Engine';
   
  
  randomLatitude = [52.278227,51.445223,1.052488,54.568903,18.824329];

    
  randomLongitude = [5.079207,-0.080526,110.128315,25.48146,99.051246];

  chosenLatitude = 52.00;
  chosenLongitude = 7.91;
  locationChosen = false;
  
  onChoseLocation(event) {
    this.chosenLatitude = event.coords.lat;
    this.chosenLongitude = event.coords.lng;
    this.locationChosen = true;
  }
}
