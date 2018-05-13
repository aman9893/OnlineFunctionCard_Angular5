import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewWeddingCardComponent } from './preview-wedding-card.component';

describe('PreviewWeddingCardComponent', () => {
  let component: PreviewWeddingCardComponent;
  let fixture: ComponentFixture<PreviewWeddingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewWeddingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewWeddingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
