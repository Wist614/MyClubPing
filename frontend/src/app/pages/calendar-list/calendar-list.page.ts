import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.page.html',
  styleUrls: ['./calendar-list.page.scss'],
})
export class CalendarListPage implements OnInit {
  refresher = document.getElementById('refresher');
  calendars: any;

  constructor(
    private calendarService: CalendarService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadCalendars();
  }

  async loadCalendars() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.calendarService.getAllCalendars().subscribe((res) => {
      loading.dismiss();
      this.calendars = res;
    });
  }

  async deleteCalendar(id, title) {
    const alert = await this.alertController.create({
      header: `Voulez-vous effacer : ${title}`,
      buttons: [
        {
          text: 'Annuler',
          handler: () => {},
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.calendarService.deleteCalendar(id);
            setTimeout(() => {
              this.calendarService.getAllCalendars().subscribe((res) => {
                this.calendars = res;
              });
            }, 500);
          },
        },
      ],
    });
    await alert.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.calendarService.getAllCalendars().subscribe((res) => {
        this.calendars = res;
      });
      event.target.complete();
    }, 1500);
  }
}
