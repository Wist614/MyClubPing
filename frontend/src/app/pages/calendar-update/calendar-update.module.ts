import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarUpdatePageRoutingModule } from './calendar-update-routing.module';

import { CalendarUpdatePage } from './calendar-update.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarUpdatePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [CalendarUpdatePage],
})
export class CalendarUpdatePageModule {}
