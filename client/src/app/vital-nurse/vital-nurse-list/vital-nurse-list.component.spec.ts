import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalNurseListComponent } from './vital-nurse-list.component';

describe('VitalNurseListComponent', () => {
  let component: VitalNurseListComponent;
  let fixture: ComponentFixture<VitalNurseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalNurseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalNurseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
