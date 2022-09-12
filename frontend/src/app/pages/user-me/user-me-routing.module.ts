import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserMePage } from './user-me.page';

const routes: Routes = [
  {
    path: '',
    component: UserMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserMePageRoutingModule {}
