import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.page.html',
  styleUrls: ['./user-update.page.scss'],
})
export class UserUpdatePage implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  async loadUser() {
    const id = await this.route.snapshot.paramMap.get('id');
    this.userService.getUserDetails(id).subscribe((res) => {
      this.user = res;
    });
  }

  updateUser(id, form: NgForm) {
    const myForm = form.value;
    this.userService.updateUser(id, myForm).subscribe((res) => {});
    this.router.navigate(['/dashboard/users']);
    this.presentToast(myForm.first_name, myForm.last_name);
  }

  async presentToast(firstName, lastName) {
    const toast = await this.toastController.create({
      message: `${lastName} ${firstName} a été mis à jour`,
      duration: 4000,
    });
    toast.present();
  }
}
