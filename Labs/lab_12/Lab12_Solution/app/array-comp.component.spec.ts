import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCompComponent } from './array-comp.component';

describe('ArrayCompComponent', () => {
  let component: ArrayCompComponent;
  let fixture: ComponentFixture<ArrayCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
