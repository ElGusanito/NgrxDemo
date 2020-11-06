import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgrxDemo';
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  diameter = 100;
  strokeWidth;
  float:boolean = true;
}
