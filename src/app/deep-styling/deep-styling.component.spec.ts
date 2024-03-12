import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepStylingComponent } from './deep-styling.component';

describe('DeepStylingComponent', () => {
  let component: DeepStylingComponent;
  let fixture: ComponentFixture<DeepStylingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeepStylingComponent]
    });
    fixture = TestBed.createComponent(DeepStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
