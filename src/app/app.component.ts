import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutorial';
  showText = false;
  todaysDate = new Date();
  itemImageUrl = "../assets/benta-scaled.jpg";

  toggleText(): void {
    this.showText = !this.showText;
  }
}
