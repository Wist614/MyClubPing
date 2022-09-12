import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserUpdatePageRoutingModule } from './user-update-routing.module';

import { UserUpdatePage } from './user-update.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserUpdatePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [UserUpdatePage],
})
export class UserUpdatePageModule {}
