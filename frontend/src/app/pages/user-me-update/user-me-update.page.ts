import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Component({
  selector: 'app-user-me-update',
  templateUrl: './user-me-update.page.html',
  styleUrls: ['./user-me-update.page.scss'],
})
export class UserMeUpdatePage implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.loadMe();
  }

  async loadMe() {
    const decodedToken = helper.decodeToken(
      await this.storage.get('ACCESS_TOKEN')
    );
    const id = decodedToken.id;
    this.userService.getUserDetails(id).subscribe((res) => {
      this.user = res;
    });
  }

  updateUser(id, form: NgForm) {
    const myForm = form.value;
    this.userService.updateUser(id, myForm).subscribe((res) => {});
    this.router.navigateByUrl('/user/me');
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: `Votre profil a été mis à jour`,
      duration: 4000,
    });
    toast.present();
  }
}
