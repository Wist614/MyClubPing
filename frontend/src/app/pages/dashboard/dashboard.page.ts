import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertController } from '@ionic/angular';
const helper = new JwtHelperService();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(
    private storage: Storage,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadMe();
  }

  async loadMe() {
    const decodedToken = helper.decodeToken(
      await this.storage.get('ACCESS_TOKEN')
    );
    const id = decodedToken.is_admin;
    if (!id) {
      const alert = await this.alertController.create({
        header: `Vous n'êtes pas autorisé à accéder à cette page`,
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.router.navigate(['/news']);
            },
          },
        ],
      });
      await alert.present();
    }
  }
}
