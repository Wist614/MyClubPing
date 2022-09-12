import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import moment from 'moment';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar-update',
  templateUrl: './calendar-update.page.html',
  styleUrls: ['./calendar-update.page.scss'],
})
export class CalendarUpdatePage implements OnInit {
  calendar: any;

  constructor(
    private calendarService: CalendarService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadCalendar();
  }

  async loadCalendar() {
    const id = await this.route.snapshot.paramMap.get('id');
    this.calendarService.getCalendarDetails(id).subscribe((res) => {
      this.calendar = res;
    });
  }

  updateCalendar(id, form: NgForm) {
    const name = form.value.name;
    const date = moment(form.value.date).format('YYYY-MM-DD');
    const myForm = { name, date };
    this.calendarService.updateCalendar(id, myForm).subscribe((res) => {});
    this.router.navigate(['/dashboard/calendar']);
    this.presentToast(myForm.name);
  }

  async presentToast(name) {
    const toast = await this.toastController.create({
      message: `${name} a été mis à jour`,
      duration: 4000,
    });
    toast.present();
  }
}
