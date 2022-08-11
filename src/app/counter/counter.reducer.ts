import { Action, createReducer, on, props } from '@ngrx/store';
import { decrease, increment, reset, multiply, split } from './counter.actions';

// export const counterReducer = (state: number = 10, action: Action) => {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;
//       break;

//     case decrease.type:
//       return state + 1;
//       break;

//     default:
//       return state;
//       break;
//   }
// };

export const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrease, (state) => state - 1),
  on(multiply, (state, { numb }) => state * numb),
  on(split, (state, { numb }) => state / numb),
  on(reset, (state) => 0)
);

// export function CounterReducer(state, action) {}

export const counterReducer = (state: number = initialState, action: Action) =>
  _counterReducer(state, action);
