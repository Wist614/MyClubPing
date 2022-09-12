import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  messages: any;

  constructor(
    private messageService: MessageService,
    private loadingCtrl: LoadingController
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

  doRefresh(event) {
    setTimeout(() => {
      this.messageService.getAllMessages().subscribe((res) => {
        this.messages = res;
        console.log(this.messages);
      });
      event.target.complete();
    }, 1500);
  }
}
