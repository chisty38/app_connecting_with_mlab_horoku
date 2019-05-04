import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { VitalListService } from 'src/app/services/vital-list.service';
import { VitalSign } from 'src/app/models/vital-sign';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-daily-tip',
  templateUrl: './daily-tip.component.html',
  styleUrls: ['./daily-tip.component.css']
})
export class DailyTipComponent implements OnInit {
  title: string;
  vitals: VitalSign[];
  user: User;
  patientID: string;

  constructor(
    private vitalListService: VitalListService,
    private flashMessage: FlashMessagesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.vitals = new Array<VitalSign>();
    this.displayDailyTip();
  }

  displayDailyTip(): void {
    this.vitalListService.getList_DailyTip().subscribe(data => {
      if(data.success) {
        console.log(data);
        this.vitals = data.vitalList;
      } else {
        this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    })
  }
}
