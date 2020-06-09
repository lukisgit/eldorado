import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GAME } from '../constants/games';
import { DB, DB_OFFERS } from '../../db';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EldoradoService {
  public getItems(
    gameId: GAME,
    filters: { id: string; value: string }[]
  ): Observable<any> {
    const data = JSON.parse(JSON.stringify(DB[gameId]));
    const response = {};
    Object.keys(data.items).forEach((key) => {
      const item = data.items[key];
      let counter = 0; // how many valid filters (should be equal to filters array length)

      // Compare single item attributes within active filters
      Object.keys(item.attributes).forEach((attrKey) => {
        const attr = item.attributes[attrKey];
        const filter = filters.find((filter) => filter.id === attrKey)?.value;
        if (attr === filter) {
          counter++;
        }
      });

      if (counter === filters.length) {
        response[key] = item;
      }
    });

    // inject response items
    data.items = response;

    return of(data).pipe(delay(1000));
  }

  public getItem(id: string) {
    const data = JSON.parse(JSON.stringify(DB));
    const items = {};
    Object.keys(data).forEach((key) => {
      Object.keys(data[key].items).forEach((itemKey) => {
        const item = data[key].items[itemKey];
        items[item.id] = {
          id: item.id,
          image_url: item.image_url,
          label: itemKey,
        };
      });
    });
    const response = items[id];
    return of(response).pipe(delay(1000));
  }

  public getOffers(id: string) {
    const data = JSON.parse(JSON.stringify(DB_OFFERS));
    return of(data.find((item) => item.id === id)?.offers).pipe(delay(1500));
  }

  constructor() {}
}
