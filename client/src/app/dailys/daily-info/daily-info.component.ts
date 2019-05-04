import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { DailyInfo } from 'src/app/models/daily-info';
import { DailyInfoService } from 'src/app/services/daily-info.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-daily-info',
  templateUrl: './daily-info.component.html',
  styleUrls: ['./daily-info.component.css']
})
export class DailyInfoComponent implements OnInit {
  title: string;
  dailyInfo: DailyInfo;

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private dailyInfoService: DailyInfoService
  ) {}

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.dailyInfo = new DailyInfo();

    this.dailyInfo.patientID = this.authService.getUserID();
  }

  onDailyInfoSubmit(): void {
    this.dailyInfoService.addDailyInfo(this.dailyInfo).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {
          cssClass: "alert-success",
          timeOut: 3000
        });

        this.router.navigate(["/dailys"]);
      } else {
        this.flashMessage.show("Add Daily Info Failed", {
          cssClass: "alert-danger",
          timeOut: 3000
        });

        this.router.navigate(["/dailyInfo"]);
      }
    });
  }

}
