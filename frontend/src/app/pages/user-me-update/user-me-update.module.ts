import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserMeUpdatePageRoutingModule } from './user-me-update-routing.module';

import { UserMeUpdatePage } from './user-me-update.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserMeUpdatePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [UserMeUpdatePage],
})
export class UserMeUpdatePageModule {}
