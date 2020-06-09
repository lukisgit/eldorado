import { createReducer, on } from '@ngrx/store';
import {
  getOffersFailed,
  getOffersRequested,
  getOffersSuccess,
} from './actions';

export const initialState = {
  loading: false,
  success: false,
  failed: false,
  data: null,
};

const _offersReducer = createReducer(
  initialState,
  on(getOffersRequested, (state) => ({
    ...state,
    loading: true,
    success: false,
    failed: false,
    data: null,
  })),
  on(getOffersSuccess, (state, action: any) => ({
    ...state,
    loading: false,
    success: true,
    failed: false,
    data: action.payload,
  })),
  on(getOffersFailed, (state) => ({
    ...state,
    loading: false,
    success: false,
    failed: true,
    data: null,
  }))
);

export function offersReducer(state, action) {
  return _offersReducer(state, action);
}
