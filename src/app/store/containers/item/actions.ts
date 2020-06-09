import { createAction } from '@ngrx/store';

export const getItemRequested = createAction('GET_ITEM_REQUESTED');
export const getItemSuccess = createAction('GET_ITEM_SUCCESS');
export const getItemFailed = createAction('GET_ITEM_FAILED');
