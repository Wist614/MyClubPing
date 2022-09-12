import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarListPageRoutingModule } from './calendar-list-routing.module';

import { CalendarListPage } from './calendar-list.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarListPageRoutingModule,
    FooterPageModule,
  ],
  declarations: [CalendarListPage],
})
export class CalendarListPageModule {}
