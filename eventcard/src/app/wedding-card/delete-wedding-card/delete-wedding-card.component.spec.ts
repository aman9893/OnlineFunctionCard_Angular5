import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWeddingCardComponent } from './delete-wedding-card.component';

describe('DeleteWeddingCardComponent', () => {
  let component: DeleteWeddingCardComponent;
  let fixture: ComponentFixture<DeleteWeddingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWeddingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWeddingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
