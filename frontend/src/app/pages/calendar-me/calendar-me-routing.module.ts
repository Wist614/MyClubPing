import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarMePage } from './calendar-me.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarMePageRoutingModule {}
