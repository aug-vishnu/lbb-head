import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordSelectionComponent } from './keyword-selection.component';

describe('KeywordSelectionComponent', () => {
  let component: KeywordSelectionComponent;
  let fixture: ComponentFixture<KeywordSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
