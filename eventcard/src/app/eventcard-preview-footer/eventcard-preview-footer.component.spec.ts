import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardPreviewFooterComponent } from './eventcard-preview-footer.component';

describe('EventcardPreviewFooterComponent', () => {
  let component: EventcardPreviewFooterComponent;
  let fixture: ComponentFixture<EventcardPreviewFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardPreviewFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardPreviewFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
