import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingPagesEditComponent } from './publishing-pages-edit.component';

describe('PublishingPagesEditComponent', () => {
  let component: PublishingPagesEditComponent;
  let fixture: ComponentFixture<PublishingPagesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishingPagesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingPagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
