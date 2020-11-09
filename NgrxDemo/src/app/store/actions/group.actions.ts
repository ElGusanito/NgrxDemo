import { createAction, props, union } from '@ngrx/store';

export const updateGroup= createAction(
  '[Group] Update Group', props<{ payload:{groupCode:string} }>()
);

export const updateGroupSuccess = createAction(
  '[Group] Update GroupSuccess'
);

export const updateGroupFailure = createAction(
  '[Group] Update GroupFailure',
  props<{ error: any }>()
);

const all = union({
  updateGroup,
  updateGroupSuccess,
  updateGroupFailure
});

export type GroupActionsUnion = typeof all;
