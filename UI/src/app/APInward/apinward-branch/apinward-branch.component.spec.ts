import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APInwardBranchComponent } from './apinward-branch.component';

describe('APInwardBranchComponent', () => {
  let component: APInwardBranchComponent;
  let fixture: ComponentFixture<APInwardBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APInwardBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APInwardBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
