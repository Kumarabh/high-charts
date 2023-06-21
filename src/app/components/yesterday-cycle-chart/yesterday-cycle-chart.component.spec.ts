import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdayCycleChartComponent } from './yesterday-cycle-chart.component';

describe('YesterdayCycleChartComponent', () => {
  let component: YesterdayCycleChartComponent;
  let fixture: ComponentFixture<YesterdayCycleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesterdayCycleChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesterdayCycleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
