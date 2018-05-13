import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardPreviewHeaderComponent } from './eventcard-preview-header.component';

describe('EventcardPreviewHeaderComponent', () => {
  let component: EventcardPreviewHeaderComponent;
  let fixture: ComponentFixture<EventcardPreviewHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardPreviewHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardPreviewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
