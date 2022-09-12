import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.page.html',
  styleUrls: ['./stock-update.page.scss'],
})
export class StockUpdatePage implements OnInit {
  stock: any;

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadStock();
  }

  async loadStock() {
    const id = await this.route.snapshot.paramMap.get('id');
    this.stockService.getOneStock(id).subscribe((res) => {
      this.stock = res;
    });
  }

  updateStock(id, form: NgForm) {
    const myForm = form.value;
    this.stockService.updateStock(id, myForm).subscribe((res) => {});
    this.router.navigate(['/dashboard/stock']);
    this.presentToast(myForm.name);
  }

  async presentToast(myForm) {
    const toast = await this.toastController.create({
      message: `${myForm} mis à jour`,
      duration: 4000,
    });
    toast.present();
  }
}
