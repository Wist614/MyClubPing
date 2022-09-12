import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async login() {
    const val = this.myForm.value;

    if (val.email && val.password) {
      await this.authService.login(val.email, val.password).subscribe(
        (res) => {
          console.log('User is logged in');
          this.router.navigateByUrl('/news');
          console.log(res);
        },
        (error) => {
          this.presentToast();
        }
      );
    } else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Email ou mot de passe incorect !',
      duration: 4000,
    });
    toast.present();
  }
}
