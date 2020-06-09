import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ItemsComponent } from './pages/items/items.component';
import { SharedModule } from './shared/shared.module';

import { ActionReducer, State, StoreModule } from '@ngrx/store';
import { itemsReducer } from './store/containers/items/reducer';
import { itemReducer } from './store/containers/item/reducer';
import { offersReducer } from './store/containers/offers/reducer';
import { environment } from '../environments/environment';
import { storeLogger } from 'ngrx-store-logger';
import { EldoradoService } from './services/eldorado.service';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './store/containers/items/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ItemComponent } from './pages/item/item.component';
import { ItemEffects } from './store/containers/item/effects';
import { OffersEffects } from './store/containers/offers/effects';

export function logger(reducer): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ItemsComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(
      { items: itemsReducer, item: itemReducer, offers: offersReducer },
      { metaReducers }
    ),
    EffectsModule.forRoot([ItemsEffects, ItemEffects, OffersEffects]),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [EldoradoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
