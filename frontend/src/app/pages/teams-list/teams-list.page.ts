import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss'],
})
export class TeamsListPage implements OnInit {
  teams: any;
  constructor(
    private matchService: MatchService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadTeams();
  }

  async loadTeams() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.matchService.getAllMatchs().subscribe((res) => {
      loading.dismiss();
      this.teams = res;
    });
  }

  async deleteTeam(id, name) {
    const alert = await this.alertController.create({
      header: `Voulez-vous effacer : ${name}`,
      buttons: [
        {
          text: 'Annuler',
          handler: () => {},
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.matchService.deleteMatch(id);
            setTimeout(() => {
              this.matchService.getAllMatchs().subscribe((res) => {
                this.teams = res;
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
      this.matchService.getAllMatchs().subscribe((res) => {
        this.teams = res;
      });
      event.target.complete();
    }, 1500);
  }
}
