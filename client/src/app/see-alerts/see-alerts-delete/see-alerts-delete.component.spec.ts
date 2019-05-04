import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAlertsDeleteComponent } from './see-alerts-delete.component';

describe('SeeAlertsDeleteComponent', () => {
  let component: SeeAlertsDeleteComponent;
  let fixture: ComponentFixture<SeeAlertsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAlertsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAlertsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
