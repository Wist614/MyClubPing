import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsListPageRoutingModule } from './teams-list-routing.module';

import { TeamsListPage } from './teams-list.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsListPageRoutingModule,
    FooterPageModule,
  ],
  declarations: [TeamsListPage],
})
export class TeamsListPageModule {}
