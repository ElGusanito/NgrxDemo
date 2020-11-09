import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GroupActions } from './store/actions';
import { State } from './store/reducers/group.reducer';
import { selectGroup } from './store/selectors/group.selectors';

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
  group$: Observable<State>;

  constructor(private store: Store){}
  ngOnInit() {
    this.group$ = this.store.select(selectGroup);
    this.group$.subscribe((group)=>{
      const code = group.groupCode;
    }
      
    );
  } 

  update(val){
    this.store.dispatch(GroupActions.updateGroup({payload:{groupCode:val}}))
  }
}
