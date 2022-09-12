import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
const helper = new JwtHelperService();

@Component({
  selector: 'app-user-me',
  templateUrl: './user-me.page.html',
  styleUrls: ['./user-me.page.scss'],
})
export class UserMePage implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loadMe();
  }

  //initiate user's profil view
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

    this.userService.getUserDetails(id).subscribe((res) => {
      loading.dismiss();
      this.user = res;
    });
  }

  goToCalendar(id: string) {
    const userId = id;
    this.router.navigate([`/calendar/me`]);
  }

  goToUpdate() {
    this.router.navigate([`/user/me/update`]);
  }

  logout() {
    this.authService.logout();
  }

  //function for the refresher
  doRefresh(event) {
    setTimeout(() => {
      this.loadMe();
      event.target.complete();
    }, 1500);
  }
}
