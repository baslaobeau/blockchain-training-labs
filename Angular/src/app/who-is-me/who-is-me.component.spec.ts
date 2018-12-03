import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsMeComponent } from './who-is-me.component';

describe('WhoIsMeComponent', () => {
  let component: WhoIsMeComponent;
  let fixture: ComponentFixture<WhoIsMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoIsMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoIsMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
