import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { AlertService } from 'src/app/services/alert.service';
import { Alert } from 'src/app/models/alert';

@Component({
  selector: 'app-see-alerts-list',
  templateUrl: './see-alerts-list.component.html',
  styleUrls: ['./see-alerts-list.component.css']
})
export class SeeAlertsListComponent implements OnInit {
  alerts: Alert[];

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private alertServie: AlertService
  ) { }

  ngOnInit() {
    this.alerts = new Array<Alert>();
    this.seeAlerts();
  }

  seeAlerts(): void {
    this.alertServie.getAlerts().subscribe(data => {
      if(data.success) {
        console.log(data);
        this.alerts = data.alerts;
      } else {
        this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')) {
      this.router.navigate(['/seeAlerts']);
    }
  }
}
