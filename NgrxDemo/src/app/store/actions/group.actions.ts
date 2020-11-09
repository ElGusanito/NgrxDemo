import { createAction, props } from '@ngrx/store';

export const updateGroup= createAction(
  '[Group] Update Group'
);

export const updateGroupSuccess = createAction(
  '[Group] Update GroupSuccess',
  props<{ payupdate:{} }>()
);

export const updateGroupFailure = createAction(
  '[Group] Update GroupFailure',
  props<{ error: any }>()
);
