import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinwardBranchdetailsComponent } from './apinward-branchdetails.component';

describe('ApinwardBranchdetailsComponent', () => {
  let component: ApinwardBranchdetailsComponent;
  let fixture: ComponentFixture<ApinwardBranchdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApinwardBranchdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinwardBranchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
