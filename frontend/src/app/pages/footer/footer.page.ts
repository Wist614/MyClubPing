import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  isAdmin: any;
  constructor(private storage: Storage) {}

  ngOnInit() {
    this.loadMe();
  }

  async loadMe() {
    const decodedToken = helper.decodeToken(
      await this.storage.get('ACCESS_TOKEN')
    );
    this.isAdmin = decodedToken.is_admin;
  }
}
