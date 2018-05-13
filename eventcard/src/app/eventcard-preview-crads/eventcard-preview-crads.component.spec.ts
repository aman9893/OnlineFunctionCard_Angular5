import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardPreviewCradsComponent } from './eventcard-preview-crads.component';

describe('EventcardPreviewCradsComponent', () => {
  let component: EventcardPreviewCradsComponent;
  let fixture: ComponentFixture<EventcardPreviewCradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardPreviewCradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardPreviewCradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
