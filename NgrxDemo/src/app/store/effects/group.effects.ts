import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { GroupActions } from '../actions';
import { catchError, delay, map, switchMap } from 'rxjs/operators';


@Injectable()
export class GroupEffects {



  constructor(private actions$: Actions) {}
  updateGroupCode$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(GroupActions.updateGroup),
    delay(3000),
    switchMap((action) => {
      return of(GroupActions.updateGroupSuccess({payload:{groupCode:action.payload.groupCode}}))
    }
    )
  )
);  
}
