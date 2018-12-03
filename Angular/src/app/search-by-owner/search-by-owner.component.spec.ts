import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByOwnerComponent } from './search-by-owner.component';

describe('SearchByOwnerComponent', () => {
  let component: SearchByOwnerComponent;
  let fixture: ComponentFixture<SearchByOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
