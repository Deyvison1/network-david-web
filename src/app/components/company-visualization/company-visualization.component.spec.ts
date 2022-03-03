import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVisualizationComponent } from './company-visualization.component';

describe('CompanyVisualizationComponent', () => {
  let component: CompanyVisualizationComponent;
  let fixture: ComponentFixture<CompanyVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
