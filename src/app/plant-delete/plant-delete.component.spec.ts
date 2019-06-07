import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDeleteComponent } from './plant-delete.component';

describe('PlantDeleteComponent', () => {
  let component: PlantDeleteComponent;
  let fixture: ComponentFixture<PlantDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
