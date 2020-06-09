import { createAction } from '@ngrx/store';

export const getOffersRequested = createAction('GET_OFFERS_REQUESTED');
export const getOffersSuccess = createAction('GET_OFFERS_SUCCESS');
export const getOffersFailed = createAction('GET_OFFERS_FAILED');
