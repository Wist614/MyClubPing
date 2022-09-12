import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsCreatePageRoutingModule } from './news-create-routing.module';

import { NewsCreatePage } from './news-create.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsCreatePageRoutingModule,
    ReactiveFormsModule,
    FooterPageModule,
  ],
  declarations: [NewsCreatePage],
})
export class NewsCreatePageModule {}
