import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarCreatePageRoutingModule } from './calendar-create-routing.module';

import { CalendarCreatePage } from './calendar-create.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarCreatePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [CalendarCreatePage],
})
export class CalendarCreatePageModule {}
