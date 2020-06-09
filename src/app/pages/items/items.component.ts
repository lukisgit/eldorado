import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { GAME, GAMES } from '../../constants/games';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit, OnDestroy {
  game: { id: GAME; label: string } = null;

  itemsSubscription: Subscription;
  items$: Observable<any>;

  loading: boolean = true;
  failed: boolean = false;
  attributes: any = null;
  items: any = null;

  activeFilters: { id: string; value: string }[] = [];
  initAttributes: boolean = false;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.items$ = store.pipe(select((state: any) => state?.items));
    this.itemsSubscription = this.items$.subscribe((response) => {
      this.loading = response.loading;
      this.failed = response.failed;
      if (this.failed || this.loading) {
        return;
      }
      if (response.success) {
        if (!this.initAttributes) {
          this.attributes = Object.keys(response.data.attributes).map(
            (key) => ({
              id: key,
              options: response.data.attributes[key],
            })
          );
          this.initAttributes = true;
        }
        this.items = Object.keys(response.data.items).map((key) => ({
          id: key,
          data: response.data.items[key],
        }));
      }
    });
  }

  ngOnInit(): void {
    this.initAttributes = false;
    console.log(this.initAttributes);
    this.onDispatch();
    this.game = GAMES.find(
      (item) => item.id === this.route.snapshot.params?.game
    );
  }

  ngOnDestroy() {
    this.itemsSubscription.unsubscribe();
  }

  onDispatch() {
    this.store.dispatch({
      type: 'GET_ITEMS_REQUESTED',
      payload: {
        gameId: this.route.snapshot.params?.game,
        filters: this.activeFilters,
      },
    });
  }

  onFilter(event) {
    let activeFiltersCopy = JSON.parse(JSON.stringify(this.activeFilters));
    const index = activeFiltersCopy.findIndex(
      (filter) => filter.id === event.id
    );
    if (index >= 0) {
      if (event.value === '-') {
        // remove filter
        activeFiltersCopy.splice(index, 1);
      } else {
        activeFiltersCopy[index] = event;
      }
    } else {
      activeFiltersCopy = [...activeFiltersCopy, event];
    }
    this.activeFilters = activeFiltersCopy;
    console.log(this.activeFilters);
    this.onDispatch();
  }
}
