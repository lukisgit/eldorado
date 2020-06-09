import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './components/game-card/game-card.component';
import { RouterModule } from '@angular/router';
import { ItemsFilterComponent } from './components/items-filter/items-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameCardComponent, ItemsFilterComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [GameCardComponent, ItemsFilterComponent],
})
export class SharedModule {}
