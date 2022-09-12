import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchsDetailsPageRoutingModule } from './matchs-details-routing.module';

import { MatchsDetailsPage } from './matchs-details.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchsDetailsPageRoutingModule,
    FooterPageModule,
  ],
  declarations: [MatchsDetailsPage],
})
export class MatchsDetailsPageModule {}
