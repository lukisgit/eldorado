import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ItemsComponent } from './pages/items/items.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    component: HomeComponent,
  },
  {
    path: 'game',
    children: [
      {
        path: ':game/items',
        component: ItemsComponent,
      },
    ],
  },
  {
    path: 'item/:id',
    component: ItemComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
