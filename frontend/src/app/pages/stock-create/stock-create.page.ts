import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.page.html',
  styleUrls: ['./stock-create.page.scss'],
})
export class StockCreatePage implements OnInit {
  stock = null;

  constructor(
    private stockService: StockService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  createStock(form: NgForm) {
    const myForm = form.value.name;
    this.stockService.addStock(myForm).subscribe((res) => {});
    this.router.navigate(['/dashboard/stock']);
    this.presentToast(myForm);
  }

  async presentToast(myForm) {
    const toast = await this.toastController.create({
      message: `${myForm} a été ajouté au stock !`,
      duration: 4000,
    });
    toast.present();
  }
}
