import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsOrderListComponent } from './plants-order-list.component';

describe('PlantsOrderListComponent', () => {
  let component: PlantsOrderListComponent;
  let fixture: ComponentFixture<PlantsOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
