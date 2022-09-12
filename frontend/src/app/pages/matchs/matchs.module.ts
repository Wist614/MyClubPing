import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchsPageRoutingModule } from './matchs-routing.module';

import { MatchsPage } from './matchs.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchsPageRoutingModule,
    FooterPageModule,
  ],
  declarations: [MatchsPage],
})
export class MatchsPageModule {}
