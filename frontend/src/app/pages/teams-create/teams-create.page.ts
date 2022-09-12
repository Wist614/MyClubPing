import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-teams-create',
  templateUrl: './teams-create.page.html',
  styleUrls: ['./teams-create.page.scss'],
})
export class TeamsCreatePage implements OnInit {
  team = null;

  constructor(
    private matchService: MatchService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  createTeam(form: NgForm) {
    const myForm = form.value.name_team;
    console.log(myForm);
    this.matchService.addTeam(myForm).subscribe((res) => {});
    this.router.navigate(['/dashboard/teams']);
    this.presentToast(myForm);
  }

  async presentToast(myForm) {
    const toast = await this.toastController.create({
      message: `${myForm} a été ajoutée !`,
      duration: 4000,
    });
    toast.present();
  }
}
