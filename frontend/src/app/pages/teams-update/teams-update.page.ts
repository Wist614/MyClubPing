/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MatchService } from 'src/app/services/match.service';
import { CalendarService } from 'src/app/services/calendar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teams-update',
  templateUrl: './teams-update.page.html',
  styleUrls: ['./teams-update.page.scss'],
})
export class TeamsUpdatePage implements OnInit {
  team: any;
  days: any;
  players: any;

  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController,
    private calendarService: CalendarService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadMatch();
    this.loadDays();
    this.loadPlayers();
  }

  async loadMatch() {
    const id = await this.route.snapshot.paramMap.get('id');
    this.matchService.getMatchDetails(id).subscribe((res) => {
      this.team = res;
    });
  }

  async loadDays() {
    this.calendarService.getAllCalendars().subscribe((res) => {
      this.days = res;
    });
  }

  async loadPlayers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.players = res;
    });
  }

  updateTeam(id, form: NgForm) {
    const myForm = {
      hour: form.value.hour,
      location: form.value.location,
      opponent: form.value.opponent,
      player_1: form.value.player_1.aboutUser,
      player_2: form.value.player_2.aboutUser,
      player_3: form.value.player_3.aboutUser,
      player_4: form.value.player_4.aboutUser,
      match_day_id: form.value.day.id,
    };
    this.matchService.updateMatch(id, myForm).subscribe((res) => {});
    this.router.navigate(['/dashboard/teams']);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: `Match mis à jour`,
      duration: 4000,
    });
    toast.present();
  }
}
