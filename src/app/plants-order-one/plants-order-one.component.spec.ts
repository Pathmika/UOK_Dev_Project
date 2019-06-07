import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsOrderOneComponent } from './plants-order-one.component';

describe('PlantsOrderOneComponent', () => {
  let component: PlantsOrderOneComponent;
  let fixture: ComponentFixture<PlantsOrderOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsOrderOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsOrderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
