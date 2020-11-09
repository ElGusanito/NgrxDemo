import { createFeatureSelector, createSelector } from '@ngrx/store';
import { groupFeatureKey, State } from '../reducers/group.reducer';

const groupFeature = createFeatureSelector<State>(groupFeatureKey);

export const selectGroup = createSelector(groupFeature, state => state);