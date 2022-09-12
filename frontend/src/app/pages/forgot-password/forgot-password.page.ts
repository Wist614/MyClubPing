import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
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

  ngOnInit() {}

  async sendNewPassword() {
    const val = this.myForm.value;

    if (val.email && val.password) {
      await this.authService.updatePassword(val.email, val.password).subscribe(
        (res) => {
          this.router.navigateByUrl('/home');
          this.presentToast('Le mot de passe a été modifié');
        },
        (error) => {
          this.presentToast('Les valeurs sont incorrectes');
        }
      );
    } else {
      this.presentToast('Veuillez remplir les champs');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
    });
    toast.present();
  }
}
