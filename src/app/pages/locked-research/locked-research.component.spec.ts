import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedResearchComponent } from './locked-research.component';

describe('LockedResearchComponent', () => {
  let component: LockedResearchComponent;
  let fixture: ComponentFixture<LockedResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
