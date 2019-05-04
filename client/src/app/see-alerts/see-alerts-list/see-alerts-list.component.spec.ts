import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAlertsListComponent } from './see-alerts-list.component';

describe('SeeAlertsListComponent', () => {
  let component: SeeAlertsListComponent;
  let fixture: ComponentFixture<SeeAlertsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAlertsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAlertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
