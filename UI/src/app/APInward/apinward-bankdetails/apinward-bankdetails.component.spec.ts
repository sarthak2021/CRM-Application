import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinwardBankdetailsComponent } from './apinward-bankdetails.component';

describe('ApinwardBankdetailsComponent', () => {
  let component: ApinwardBankdetailsComponent;
  let fixture: ComponentFixture<ApinwardBankdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApinwardBankdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinwardBankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
