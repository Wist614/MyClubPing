import { Component, OnChanges, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
  refresher = document.getElementById('refresher');
  messages: any;

  constructor(
    private messageService: MessageService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadMessages();
  }

  async loadMessages() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.messageService.getAllMessages().subscribe((res) => {
      loading.dismiss();
      this.messages = res;
    });
  }

  async deleteMessage(id, title) {
    const alert = await this.alertController.create({
      header: `Voulez-vous effacer le message: ${title}`,
      buttons: [
        {
          text: 'Annuler',
          handler: () => {},
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.messageService.deleteMessage(id);
            setTimeout(() => {
              this.messageService.getAllMessages().subscribe((res) => {
                this.messages = res;
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
      this.messageService.getAllMessages().subscribe((res) => {
        this.messages = res;
      });
      event.target.complete();
    }, 1500);
  }
}
