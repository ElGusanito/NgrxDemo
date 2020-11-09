import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromGroup from './group.reducer';


export interface State{
  [fromGroup.groupFeatureKey]: fromGroup.State;

}



export const reducers: ActionReducerMap<State> = {

  [fromGroup.groupFeatureKey]: fromGroup.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
