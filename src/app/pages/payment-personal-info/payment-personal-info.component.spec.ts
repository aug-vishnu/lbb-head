import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPersonalInfoComponent } from './payment-personal-info.component';

describe('PaymentPersonalInfoComponent', () => {
  let component: PaymentPersonalInfoComponent;
  let fixture: ComponentFixture<PaymentPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
