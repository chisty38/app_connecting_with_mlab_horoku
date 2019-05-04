import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalComponent } from './vital.component';

describe('VitalComponent', () => {
  let component: VitalComponent;
  let fixture: ComponentFixture<VitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
