import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EldoradoService } from '../../../services/eldorado.service';
import { GAME } from '../../../constants/games';

@Injectable()
export class ItemsEffects {
  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('GET_ITEMS_REQUESTED'),
      mergeMap(
        (action: {
          type: any;
          payload: { gameId: GAME; filters: { id: string; value: string }[] };
        }) =>
          this.eldoradoService
            .getItems(action.payload.gameId, action.payload.filters)
            .pipe(
              map((result) => ({
                type: 'GET_ITEMS_SUCCESS',
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
