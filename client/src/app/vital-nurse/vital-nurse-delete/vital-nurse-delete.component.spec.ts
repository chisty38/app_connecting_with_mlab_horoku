import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalNurseDeleteComponent } from './vital-nurse-delete.component';

describe('VitalNurseDeleteComponent', () => {
  let component: VitalNurseDeleteComponent;
  let fixture: ComponentFixture<VitalNurseDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalNurseDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalNurseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
