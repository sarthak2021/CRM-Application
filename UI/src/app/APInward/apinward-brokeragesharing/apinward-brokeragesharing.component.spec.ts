import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinwardBrokeragesharingComponent } from './apinward-brokeragesharing.component';

describe('ApinwardBrokeragesharingComponent', () => {
  let component: ApinwardBrokeragesharingComponent;
  let fixture: ComponentFixture<ApinwardBrokeragesharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApinwardBrokeragesharingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinwardBrokeragesharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
