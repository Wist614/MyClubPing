import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.page.html',
  styleUrls: ['./news-create.page.scss'],
})
export class NewsCreatePage implements OnInit {
  myForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router,
    public toastController: ToastController
  ) {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      post: ['', Validators.required],
    });
  }

  ngOnInit() {}

  createMessage() {
    const val = this.myForm.value;

    this.messageService.addMessage(val.title, val.post).subscribe();
    this.router.navigate(['/dashboard/messages']);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Votre message a été créé',
      duration: 4000,
    });
    toast.present();
  }
}
