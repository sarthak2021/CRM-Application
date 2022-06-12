import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinwardExchangelinkingComponent } from './apinward-exchangelinking.component';

describe('ApinwardExchangelinkingComponent', () => {
  let component: ApinwardExchangelinkingComponent;
  let fixture: ComponentFixture<ApinwardExchangelinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApinwardExchangelinkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinwardExchangelinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
