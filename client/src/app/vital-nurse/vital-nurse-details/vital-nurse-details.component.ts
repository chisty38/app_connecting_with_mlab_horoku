import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { VitalSign } from 'src/app/models/vital-sign';
import { VitalListService } from 'src/app/services/vital-list.service';

@Component({
  selector: 'app-vital-nurse-details',
  templateUrl: './vital-nurse-details.component.html',
  styleUrls: ['./vital-nurse-details.component.css']
})
export class VitalNurseDetailsComponent implements OnInit {
  title: string;
  vital: VitalSign

  constructor(
    private vitalListService: VitalListService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;

    this.vital = new VitalSign();

    this.activatedRoute.params.subscribe(params => {
      this.vital._id = params.id;
    });

    if (this.title === "Edit Vital Sign") {
      this.getVital(this.vital);
    }
  }

  getVital(vital: VitalSign): void {
    this.vitalListService.getVitalSign(vital).subscribe(data => {
      this.vital = data.vital;
    });
  }

  onVitalDetailsSubmit(): void {
    switch(this.title) {
      case "Add New Vital Sign":
      this.vitalListService.addVitalSign(this.vital).subscribe(data => {

        if (data.success) {
          this.flashMessage.show(data.msg, {
            cssClass: "alert-success",
            timeOut: 3000
          });

          this.router.navigate(["/vitalSign/vitalSign-list-Nurse"]);
        } else {
          this.flashMessage.show("Add Vital Sign Failed", {
            cssClass: "alert-danger",
            timeOut: 3000
          });

          this.router.navigate(["/vitalSign/vitalSign-list-Nurse"]);
        }
      });

      break;

      case "Edit Vital Sign":
      this.vitalListService.editVitalSign(this.vital).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {
            cssClass: "alert-success",
            timeOut: 3000
          });

          this.router.navigate(["/vitalSign/vitalSign-list-Nurse"]);
        } else {
          this.flashMessage.show("Edit Vital Sign Failed", {
            cssClass: "alert-danger",
            timeOut: 3000
          });

          this.router.navigate(["/vitalSign/vitalSign-list-Nurse"]);
        }
      });
      break;
    }
  }

}
