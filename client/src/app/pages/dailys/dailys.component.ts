import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dailys',
  templateUrl: './dailys.component.html',
  styleUrls: ['./dailys.component.css']
})
export class DailysComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
   }

  ngOnInit() {
  }

}
