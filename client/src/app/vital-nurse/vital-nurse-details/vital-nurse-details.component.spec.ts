import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalNurseDetailsComponent } from './vital-nurse-details.component';

describe('VitalNurseDetailsComponent', () => {
  let component: VitalNurseDetailsComponent;
  let fixture: ComponentFixture<VitalNurseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalNurseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalNurseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
