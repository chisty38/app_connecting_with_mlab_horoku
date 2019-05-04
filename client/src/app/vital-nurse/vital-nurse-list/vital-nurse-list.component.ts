import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { VitalSign } from 'src/app/models/vital-sign';
import { VitalListService } from 'src/app/services/vital-list.service';

@Component({
  selector: 'app-vital-nurse-list',
  templateUrl: './vital-nurse-list.component.html',
  styleUrls: ['./vital-nurse-list.component.css']
})
export class VitalNurseListComponent implements OnInit {
  vitals: VitalSign[];

  constructor(
    private vitalListService: VitalListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vitals = new Array<VitalSign>();
    this.displayVitalList();
  }

  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')) {
      this.router.navigate(['/vitalSign/vitalSign-list-Nurse']);
    }
  }

  displayVitalList(): void {
    this.vitalListService.getList().subscribe(data => {
      if(data.success) {
        console.log(data);
        this.vitals = data.vitalList;
      } else {
        this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

}
