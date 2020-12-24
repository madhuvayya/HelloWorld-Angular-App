import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl;
  url;
  userName: String = "";

  ngOnInit(): void {
    this.title = 'Hello from Bridgelabz';
    this.imgUrl = "../assets/BridgeLabz-logo.jpg";
    this.url = "https://bridgelabz.com";
  }

  onClick($event){
    console.log("Save button clicked!", $event);
    window.open(this.url, "_blank");
  }
}
