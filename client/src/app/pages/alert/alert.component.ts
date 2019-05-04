import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { Alert } from 'src/app/models/alert';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alert: Alert;

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.alert = new Alert();

    this.alert.patientID = this.authService.getUserID();
  }

  onAlertSubmit(): void {
      this.alertService.addAlert(this.alert).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {
            cssClass: "alert-success",
            timeOut: 3000
          });

          this.router.navigate(["/"]);
        } else {
          this.flashMessage.show("Add Alert Failed", {
            cssClass: "alert-danger",
            timeOut: 3000
          });

          this.router.navigate(["/alert"]);
        }
      });
  }
}
