import { Action, createReducer, on } from '@ngrx/store';
import { GroupActions } from '../actions';


export const groupFeatureKey = 'group';

export interface State {
  groupCode: string,
  loading: boolean
}

export const initialState: State = {
  groupCode: '',
  loading: false
};


export const reducer = createReducer(
  initialState,
  on(
    GroupActions.updateGroup,
    (state, action) => {
      return {
        ...state, loading: true
      };
    }
  )
);

