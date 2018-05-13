import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardLoginComponent } from './eventcard-login.component';

describe('EventcardLoginComponent', () => {
  let component: EventcardLoginComponent;
  let fixture: ComponentFixture<EventcardLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
