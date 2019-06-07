import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantInvoiceComponent } from './plant-invoice.component';

describe('PlantInvoiceComponent', () => {
  let component: PlantInvoiceComponent;
  let fixture: ComponentFixture<PlantInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
