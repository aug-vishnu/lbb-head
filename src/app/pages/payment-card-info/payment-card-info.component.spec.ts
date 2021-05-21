import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardInfoComponent } from './payment-card-info.component';

describe('PaymentCardInfoComponent', () => {
  let component: PaymentCardInfoComponent;
  let fixture: ComponentFixture<PaymentCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCardInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
