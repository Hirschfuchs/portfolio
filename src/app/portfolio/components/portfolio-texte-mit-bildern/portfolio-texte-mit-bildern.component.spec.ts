import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTexteMitBildernComponent } from './portfolio-texte-mit-bildern.component';

describe('PortfolioTexteMitBildernComponent', () => {
  let component: PortfolioTexteMitBildernComponent;
  let fixture: ComponentFixture<PortfolioTexteMitBildernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTexteMitBildernComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioTexteMitBildernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
