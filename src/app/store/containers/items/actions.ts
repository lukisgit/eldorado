import { createAction } from '@ngrx/store';

export const getItemsRequested = createAction('GET_ITEMS_REQUESTED');
export const getItemsSuccess = createAction('GET_ITEMS_SUCCESS');
export const getItemsFailed = createAction('GET_ITEMS_FAILED');
