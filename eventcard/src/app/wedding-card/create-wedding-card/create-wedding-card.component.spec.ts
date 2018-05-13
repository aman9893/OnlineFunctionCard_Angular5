import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWeddingCardComponent } from './create-wedding-card.component';

describe('CreateWeddingCardComponent', () => {
  let component: CreateWeddingCardComponent;
  let fixture: ComponentFixture<CreateWeddingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWeddingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWeddingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
