/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DisponibilityService } from 'src/app/services/disponibility.service';
const helper = new JwtHelperService();

@Component({
  selector: 'app-calendar-me',
  templateUrl: './calendar-me.page.html',
  styleUrls: ['./calendar-me.page.scss'],
})
export class CalendarMePage implements OnInit {
  dispos: any;

  constructor(
    private dispoService: DisponibilityService,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadMe();
  }

  async loadMe() {
    const decodedToken = helper.decodeToken(
      await this.storage.get('ACCESS_TOKEN')
    );
    const id = decodedToken.id;
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.dispoService.getAllDispos(id).subscribe((res) => {
      loading.dismiss();
      this.dispos = Object.create(res.match_days);
    });
  }

  async updateDispo(matchDayId, dispo) {
    //recup user id from token
    const decodedToken = helper.decodeToken(
      await this.storage.get('ACCESS_TOKEN')
    );
    const userId = decodedToken.id;

    if (dispo) {
      //modify state of dispo and create object
      dispo = !dispo;
      const newDispo = { dispo };
      //call function alert
      this.myAlert(userId, matchDayId, newDispo);
    } else {
      //modify state of dispo and create object
      dispo = !dispo;
      const newDispo = { dispo };

      //call fonction alert
      this.myAlert(userId, matchDayId, newDispo);
    }
  }

  async myAlert(userId, matchDayId, newDispo) {
    const alert = await this.alertController.create({
      header: `Voulez-vous modifier votre présence?`,
      buttons: [
        {
          text: 'Annuler',
          handler: () => {},
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.dispoService
              .updateDispo(userId, matchDayId, newDispo)
              .subscribe();
            setTimeout(() => {
              this.loadMe();
            }),
              500;
          },
        },
      ],
    });
    await alert.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.loadMe();
      event.target.complete();
    }, 1500);
  }
}
