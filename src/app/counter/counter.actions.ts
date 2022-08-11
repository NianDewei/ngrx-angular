import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrease = createAction('[Counter] Decrease');

export const multiply = createAction(
  '[Counter] Multiply',
  props<{ numb: number }>()
);
export const split = createAction('[Counter] Split', props<{ numb: number }>());

export const reset = createAction('[Counter] Reset');
