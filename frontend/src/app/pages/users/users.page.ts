import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: any;

  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.userService.getAllUsers().subscribe((res) => {
      loading.dismiss();
      this.users = res;
    });
  }

  async deleteUser(id, lastName, firstName) {
    const alert = await this.alertController.create({
      header: `Voulez-vous effacer : ${lastName} ${firstName}`,
      buttons: [
        {
          text: 'Annuler',
          handler: () => {},
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.userService.deleteUser(id);
            setTimeout(() => {
              this.userService.getAllUsers().subscribe((res) => {
                this.users = res;
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
      this.userService.getAllUsers().subscribe((res) => {
        this.users = res;
      });
      event.target.complete();
    }, 1500);
  }

  goToProfil(id: string) {
    const userId = id;
    this.router.navigate([`/dashboard/users/profile/${userId}`]);
  }
}
