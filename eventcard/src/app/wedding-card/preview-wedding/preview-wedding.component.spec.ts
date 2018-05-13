import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewWeddingComponent } from './preview-wedding.component';

describe('PreviewWeddingComponent', () => {
  let component: PreviewWeddingComponent;
  let fixture: ComponentFixture<PreviewWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
