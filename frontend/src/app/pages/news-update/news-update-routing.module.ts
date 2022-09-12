import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsUpdatePage } from './news-update.page';

const routes: Routes = [
  {
    path: '',
    component: NewsUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsUpdatePageRoutingModule {}
