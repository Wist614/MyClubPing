import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockCreatePageRoutingModule } from './stock-create-routing.module';

import { StockCreatePage } from './stock-create.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockCreatePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [StockCreatePage],
})
export class StockCreatePageModule {}
