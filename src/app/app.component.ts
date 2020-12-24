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
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = 'Hello from Bridgelabz';
    this.imgUrl = "../assets/BridgeLabz-logo.jpg";
    this.url = "https://bridgelabz.com";
  }

  onClick($event){
    console.log("Save button clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event) {
    console.log("Change event occured:", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!"; 
  }
}
