import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsCreatePage } from './teams-create.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsCreatePageRoutingModule {}
