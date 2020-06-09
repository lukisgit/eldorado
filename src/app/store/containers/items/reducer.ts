import { createReducer, on } from '@ngrx/store';
import { getItemsFailed, getItemsRequested, getItemsSuccess } from './actions';

export const initialState = {
  loading: false,
  success: false,
  failed: false,
  data: null,
};

const _itemsReducer = createReducer(
  initialState,
  on(getItemsRequested, (state) => ({
    ...state,
    loading: true,
    success: false,
    failed: false,
    data: null,
  })),
  on(getItemsSuccess, (state, action: any) => ({
    ...state,
    loading: false,
    success: true,
    failed: false,
    data: action.payload,
  })),
  on(getItemsFailed, (state) => ({
    ...state,
    loading: false,
    success: false,
    failed: true,
    data: null,
  }))
);

export function itemsReducer(state, action) {
  return _itemsReducer(state, action);
}
