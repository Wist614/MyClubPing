import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsUpdatePageRoutingModule } from './teams-update-routing.module';

import { TeamsUpdatePage } from './teams-update.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsUpdatePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [TeamsUpdatePage],
})
export class TeamsUpdatePageModule {}
