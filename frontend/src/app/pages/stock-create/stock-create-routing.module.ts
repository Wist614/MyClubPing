import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockCreatePage } from './stock-create.page';

const routes: Routes = [
  {
    path: '',
    component: StockCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockCreatePageRoutingModule {}
