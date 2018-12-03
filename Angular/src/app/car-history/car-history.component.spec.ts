import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarHistoryComponent } from './car-history.component';

describe('CarHistoryComponent', () => {
  let component: CarHistoryComponent;
  let fixture: ComponentFixture<CarHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
