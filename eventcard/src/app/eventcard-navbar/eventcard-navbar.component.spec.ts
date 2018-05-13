import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardNavbarComponent } from './eventcard-navbar.component';

describe('EventcardNavbarComponent', () => {
  let component: EventcardNavbarComponent;
  let fixture: ComponentFixture<EventcardNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
