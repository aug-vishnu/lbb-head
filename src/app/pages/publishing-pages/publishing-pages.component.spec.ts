import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingPagesComponent } from './publishing-pages.component';

describe('PublishingPagesComponent', () => {
  let component: PublishingPagesComponent;
  let fixture: ComponentFixture<PublishingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishingPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
