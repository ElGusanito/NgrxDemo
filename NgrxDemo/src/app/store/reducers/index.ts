import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';


export interface ScreenGroup{
  groupCode: string,
  loading: boolean
}

export interface State {
  group: ScreenGroup
}

export const reducers: ActionReducerMap<State> = {
  group: null
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
