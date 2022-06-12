import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinwardDocumentsComponent } from './apinward-documents.component';

describe('ApinwardDocumentsComponent', () => {
  let component: ApinwardDocumentsComponent;
  let fixture: ComponentFixture<ApinwardDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApinwardDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinwardDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
