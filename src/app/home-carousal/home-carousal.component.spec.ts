import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarousalComponent } from './home-carousal.component';

describe('HomeCarousalComponent', () => {
  let component: HomeCarousalComponent;
  let fixture: ComponentFixture<HomeCarousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCarousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
