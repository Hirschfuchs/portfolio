import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebenslaufComponent } from './lebenslauf.component';

describe('LebenslaufComponent', () => {
  let component: LebenslaufComponent;
  let fixture: ComponentFixture<LebenslaufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LebenslaufComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LebenslaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
