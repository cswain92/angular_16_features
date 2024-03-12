import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostComponentComponent } from './host-component.component';

describe('HostComponentComponent', () => {
  let component: HostComponentComponent;
  let fixture: ComponentFixture<HostComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HostComponentComponent]
    });
    fixture = TestBed.createComponent(HostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
