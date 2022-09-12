import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsCreatePageRoutingModule } from './teams-create-routing.module';

import { TeamsCreatePage } from './teams-create.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsCreatePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [TeamsCreatePage],
})
export class TeamsCreatePageModule {}
