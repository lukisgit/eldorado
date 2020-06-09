import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnDestroy {
  itemSubscription: Subscription;
  item$: Observable<any>;

  loadingItem: boolean = true;
  failedItem: boolean = false;
  dataItem: any = null;

  offersSubscription: Subscription;
  offers$: Observable<any>;

  loadingOffers: boolean = true;
  failedOffers: boolean = false;
  dataOffers: any = null;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.item$ = store.pipe(select((state: any) => state?.item));
    this.itemSubscription = this.item$.subscribe((response) => {
      this.loadingItem = response.loading;
      this.failedItem = response.failed;
      this.dataItem = response.data;
    });
    this.offers$ = store.pipe(select((state: any) => state?.offers));
    this.offersSubscription = this.offers$.subscribe((response) => {
      this.loadingOffers = response.loading;
      this.failedOffers = response.failed;
      this.dataOffers = response.data;
    });
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: 'GET_ITEM_REQUESTED',
      payload: { id: this.route.snapshot.params.id },
    });
    this.store.dispatch({
      type: 'GET_OFFERS_REQUESTED',
      payload: { id: this.route.snapshot.params.id },
    });
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
    this.offersSubscription.unsubscribe();
  }
}
