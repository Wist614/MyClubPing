import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarMePageRoutingModule } from './calendar-me-routing.module';

import { CalendarMePage } from './calendar-me.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarMePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [CalendarMePage],
})
export class CalendarMePageModule {}
