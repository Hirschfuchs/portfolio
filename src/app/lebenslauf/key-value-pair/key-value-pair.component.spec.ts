import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValuePairComponent } from './key-value-pair.component';

describe('KeyValuePairComponent', () => {
  let component: KeyValuePairComponent;
  let fixture: ComponentFixture<KeyValuePairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyValuePairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyValuePairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
