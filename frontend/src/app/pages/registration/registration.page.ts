/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
    });
  }

  ngOnInit() {}

  signUp() {
    const val = this.myForm.value;
    if (
      val.email === '' ||
      val.password === '' ||
      val.lastName === '' ||
      val.firstName === ''
    ) {
      const message = "un champ n'est pas rempli";
      this.presentToast(message);
    } else {
      this.authService
        .signUp(val.email, val.password, val.lastName, val.firstName)
        .subscribe(
          (res) => {
            const message = 'Inscription validée';
            this.presentToast(message);
            this.router.navigateByUrl('/home');
          },
          (error) => {
            const message = 'Email déjà utilisé !';
            this.presentToast(message);
          }
        );
    }
  }

  async presentToast(messageToast) {
    const toast = await this.toastController.create({
      message: messageToast,
      duration: 4000,
    });
    toast.present();
  }
}
