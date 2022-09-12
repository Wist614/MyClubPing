import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsUpdatePage } from './teams-update.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsUpdatePageRoutingModule {}
