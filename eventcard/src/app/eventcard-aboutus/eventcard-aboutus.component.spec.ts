import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardAboutusComponent } from './eventcard-aboutus.component';

describe('EventcardAboutusComponent', () => {
  let component: EventcardAboutusComponent;
  let fixture: ComponentFixture<EventcardAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
