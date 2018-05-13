import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardRegisterComponent } from './eventcard-register.component';

describe('EventcardRegisterComponent', () => {
  let component: EventcardRegisterComponent;
  let fixture: ComponentFixture<EventcardRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
