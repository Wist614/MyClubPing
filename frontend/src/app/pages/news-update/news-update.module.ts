import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsUpdatePageRoutingModule } from './news-update-routing.module';

import { NewsUpdatePage } from './news-update.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsUpdatePageRoutingModule,
    ReactiveFormsModule,
    FooterPageModule,
  ],
  declarations: [NewsUpdatePage],
})
export class NewsUpdatePageModule {}
