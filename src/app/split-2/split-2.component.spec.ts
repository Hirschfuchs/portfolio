import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Split2Component } from './split-2.component';

describe('Split2Component', () => {
  let component: Split2Component;
  let fixture: ComponentFixture<Split2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Split2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Split2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
