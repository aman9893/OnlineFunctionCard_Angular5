import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardOtherDesginComponent } from './eventcard-other-desgin.component';

describe('EventcardOtherDesginComponent', () => {
  let component: EventcardOtherDesginComponent;
  let fixture: ComponentFixture<EventcardOtherDesginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardOtherDesginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardOtherDesginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
