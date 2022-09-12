import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.page.html',
  styleUrls: ['./news-update.page.scss'],
})
export class NewsUpdatePage implements OnInit {
  message = null;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.messageService.getOneMessage(id).subscribe((res) => {
      this.message = res;
    });
  }

  updateMessage(id, form: NgForm) {
    const myForm = form.value;
    this.messageService.updateMessage(id, myForm).subscribe((res) => {});
    this.router.navigate(['/dashboard/messages']);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Message mis à jour',
      duration: 4000,
    });
    toast.present();
  }
}
