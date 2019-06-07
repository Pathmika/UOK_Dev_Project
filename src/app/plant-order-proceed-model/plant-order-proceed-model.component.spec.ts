import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantOrderProceedModelComponent } from './plant-order-proceed-model.component';

describe('PlantOrderProceedModelComponent', () => {
  let component: PlantOrderProceedModelComponent;
  let fixture: ComponentFixture<PlantOrderProceedModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantOrderProceedModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantOrderProceedModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
