import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.page.html',
  styleUrls: ['./stock-list.page.scss'],
})
export class StockListPage implements OnInit {
  stock: any;

  constructor(
    private stockService: StockService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadStock();
  }

  async loadStock() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.stockService.getAllStock().subscribe((res) => {
      loading.dismiss();
      this.stock = res;
    });
  }

  async deleteStock(id, name) {
    const alert = await this.alertController.create({
      header: `Voulez-vous effacer le produit: ${name}`,
      buttons: [
        {
          text: 'Annuler',
          handler: () => {},
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.stockService.deleteStock(id);
            setTimeout(() => {
              this.stockService.getAllStock().subscribe((res) => {
                this.stock = res;
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
      this.stockService.getAllStock().subscribe((res) => {
        this.stock = res;
      });
      event.target.complete();
    }, 1500);
  }
}
