import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailysComponent } from './dailys.component';

describe('DailysComponent', () => {
  let component: DailysComponent;
  let fixture: ComponentFixture<DailysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
