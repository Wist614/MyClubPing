import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilPageRoutingModule } from './user-profil-routing.module';

import { UserProfilPage } from './user-profil.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilPageRoutingModule,
    FooterPageModule,
  ],
  declarations: [UserProfilPage],
})
export class UserProfilPageModule {}
