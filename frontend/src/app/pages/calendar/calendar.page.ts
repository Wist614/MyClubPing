import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DisponibilityService } from 'src/app/services/disponibility.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  dispos;

  constructor(
    private dispoService: DisponibilityService,
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadDispos();
  }

  async loadDispos() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    const id = this.route.snapshot.paramMap.get('id');
    this.dispoService.getAllDispos(id).subscribe((res) => {
      loading.dismiss();
      this.dispos = Object.create(res.match_days);
    });
  }
}
