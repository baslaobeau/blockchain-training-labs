import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOwnerComponent } from './change-owner.component';

describe('ChangeOwnerComponent', () => {
  let component: ChangeOwnerComponent;
  let fixture: ComponentFixture<ChangeOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
