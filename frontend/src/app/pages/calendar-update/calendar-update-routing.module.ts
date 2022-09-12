import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarUpdatePage } from './calendar-update.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarUpdatePageRoutingModule {}
