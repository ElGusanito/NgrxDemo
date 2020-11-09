import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NgrxDemo';
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  diameter = 100;
  strokeWidth;
  float:boolean = true;
  groupCode$: Observable<string>;
  loading$: Observable<boolean>;
  ngOnInit() {

  } 
}
