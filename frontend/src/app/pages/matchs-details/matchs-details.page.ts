import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from 'src/app/services/calendar.service';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchs-details',
  templateUrl: './matchs-details.page.html',
  styleUrls: ['./matchs-details.page.scss'],
})
export class MatchsDetailsPage implements OnInit {
  match = null;
  matchDay = null;
  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private calendarService: CalendarService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.matchService.getMatchDetails(id).subscribe((res) => {
      this.match = res;
      const matchDayId = this.match.match_day_id;
      this.calendarService.getCalendarDetails(matchDayId).subscribe((res) => {
        this.matchDay = res;
      });
    });
  }
}
