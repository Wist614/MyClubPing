import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.page.html',
  styleUrls: ['./user-profil.page.scss'],
})
export class UserProfilPage implements OnInit {
  user = null;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserDetails(id).subscribe((res) => {
      this.user = res;
    });
  }

  goToCalendar(id: string) {
    const userId = id;
    this.router.navigate([`/dashboard/users/profile/calendar/${userId}`]);
  }
}
