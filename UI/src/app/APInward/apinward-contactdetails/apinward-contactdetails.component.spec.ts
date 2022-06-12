import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinwardContactdetailsComponent } from './apinward-contactdetails.component';

describe('ApinwardContactdetailsComponent', () => {
  let component: ApinwardContactdetailsComponent;
  let fixture: ComponentFixture<ApinwardContactdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApinwardContactdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinwardContactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
