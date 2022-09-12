import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.page.html',
  styleUrls: ['./matchs.page.scss'],
})
export class MatchsPage implements OnInit {
  matchs: any;
  constructor(
    private matchService: MatchService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadMatchs();
  }

  async loadMatchs() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.matchService.getAllMatchs().subscribe((res) => {
      loading.dismiss();
      this.matchs = res;
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.loadMatchs();
      event.target.complete();
    }, 1500);
  }
}
