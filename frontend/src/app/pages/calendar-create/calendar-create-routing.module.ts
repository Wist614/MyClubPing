import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarCreatePage } from './calendar-create.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarCreatePageRoutingModule {}
