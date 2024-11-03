import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTitelComponent } from './portfolio-titel.component';

describe('PortfolioTitelComponent', () => {
  let component: PortfolioTitelComponent;
  let fixture: ComponentFixture<PortfolioTitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTitelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioTitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
