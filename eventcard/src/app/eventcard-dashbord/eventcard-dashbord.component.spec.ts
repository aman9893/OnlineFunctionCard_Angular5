import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardDashbordComponent } from './eventcard-dashbord.component';

describe('EventcardDashbordComponent', () => {
  let component: EventcardDashbordComponent;
  let fixture: ComponentFixture<EventcardDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
