import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { VitalListService } from 'src/app/services/vital-list.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-vital',
  templateUrl: './vital.component.html',
  styleUrls: ['./vital.component.css']
})
export class VitalComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private vitalListService: VitalListService
    ) {
    super(route);
   }

  ngOnInit() {

  }


}
