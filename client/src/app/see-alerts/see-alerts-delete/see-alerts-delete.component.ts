import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { Alert } from 'src/app/models/alert';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-see-alerts-delete',
  templateUrl: './see-alerts-delete.component.html',
  styleUrls: ['./see-alerts-delete.component.css']
})
export class SeeAlertsDeleteComponent implements OnInit {
  title: string;
  alert: Alert;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private alertServie: AlertService
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.alert = new Alert();

    this.activatedRoute.params.subscribe(params => {
      this.alert._id = params.id;
    });

    this.deleteAlert(this.alert);
  }

  private deleteAlert(alert: Alert): void {
    this.alertServie.deleteAlert(alert).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/seeAlerts']);
      } else {
        this.flashMessage.show('Delete Vital Sign Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/seeAlerts']);
      }
    });
  }

}
