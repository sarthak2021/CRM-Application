import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinwardOtherdetailsComponent } from './apinward-otherdetails.component';

describe('ApinwardOtherdetailsComponent', () => {
  let component: ApinwardOtherdetailsComponent;
  let fixture: ComponentFixture<ApinwardOtherdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApinwardOtherdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinwardOtherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
