import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APInwardSearchComponent } from './apinward-search.component';

describe('APInwardSearchComponent', () => {
  let component: APInwardSearchComponent;
  let fixture: ComponentFixture<APInwardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APInwardSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APInwardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
