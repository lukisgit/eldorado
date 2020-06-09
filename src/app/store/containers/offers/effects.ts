import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EldoradoService } from '../../../services/eldorado.service';
import { GAME } from '../../../constants/games';

@Injectable()
export class OffersEffects {
  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('GET_OFFERS_REQUESTED'),
      mergeMap((action: { type: any; payload: { id: string } }) =>
        this.eldoradoService.getOffers(action.payload.id).pipe(
          map((result) => ({
            type: 'GET_OFFERS_SUCCESS',
            payload: result,
          }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private eldoradoService: EldoradoService
  ) {}
}
