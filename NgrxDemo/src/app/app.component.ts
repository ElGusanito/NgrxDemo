import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GroupActions } from './store/actions';

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
  constructor(private store: Store){}
  ngOnInit() {

  } 

  update(val){
    this.store.dispatch(GroupActions.updateGroup({payload:{groupCode:val}}))
  }
}
