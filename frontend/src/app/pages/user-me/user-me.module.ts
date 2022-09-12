import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserMePageRoutingModule } from './user-me-routing.module';

import { UserMePage } from './user-me.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserMePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [UserMePage],
})
export class UserMePageModule {}
