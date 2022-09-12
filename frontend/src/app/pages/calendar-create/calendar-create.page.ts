import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import moment from 'moment';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar-create',
  templateUrl: './calendar-create.page.html',
  styleUrls: ['./calendar-create.page.scss'],
})
export class CalendarCreatePage implements OnInit {
  calendar = null;

  constructor(
    private calendarService: CalendarService,
    private router: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  createCalendar(form: NgForm) {
    const name = form.value.name;
    const dateFormat = moment(form.value.date).format('YYYY-MM-DD');
    this.calendarService.addCalendar(name, dateFormat).subscribe();
    this.router.navigate(['/dashboard/calendar']);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Votre journée a été créé',
      duration: 4000,
    });
    toast.present();
  }
}
