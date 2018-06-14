import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsComponentComponent } from './farms-component.component';

describe('FarmsComponentComponent', () => {
  let component: FarmsComponentComponent;
  let fixture: ComponentFixture<FarmsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
