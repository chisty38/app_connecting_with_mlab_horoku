import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { VitalSign } from 'src/app/models/vital-sign';
import { VitalListService } from 'src/app/services/vital-list.service';

@Component({
  selector: 'app-vital-nurse-delete',
  templateUrl: './vital-nurse-delete.component.html',
  styleUrls: ['./vital-nurse-delete.component.css']
})
export class VitalNurseDeleteComponent implements OnInit {
  title: string;
  vital: VitalSign;

  constructor(
    private vitalListService: VitalListService,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.vital = new VitalSign();

    this.activatedRoute.params.subscribe(params => {
      this.vital._id = params.id;
    });

    this.deleteVitalSign(this.vital);
  }

  private deleteVitalSign(vital: VitalSign): void {
    this.vitalListService.deleteVitalSign(vital).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/vitalSign/vitalSign-list-Nurse']);
      } else {
        this.flashMessage.show('Delete Vital Sign Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/vitalSign/vitalSign-list-Nurse']);
      }
    });
  }
}
