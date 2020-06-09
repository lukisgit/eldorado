import { createReducer, on } from '@ngrx/store';
import { getItemFailed, getItemRequested, getItemSuccess } from './actions';

export const initialState = {
  loading: false,
  success: false,
  failed: false,
  data: null,
};

const _itemReducer = createReducer(
  initialState,
  on(getItemRequested, (state) => ({
    ...state,
    loading: true,
    success: false,
    failed: false,
    data: null,
  })),
  on(getItemSuccess, (state, action: any) => ({
    ...state,
    loading: false,
    success: true,
    failed: false,
    data: action.payload,
  })),
  on(getItemFailed, (state) => ({
    ...state,
    loading: false,
    success: false,
    failed: true,
    data: null,
  }))
);

export function itemReducer(state, action) {
  return _itemReducer(state, action);
}
