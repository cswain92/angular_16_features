import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContextComponentComponent } from './host-context-component.component';

describe('HostContextComponentComponent', () => {
  let component: HostContextComponentComponent;
  let fixture: ComponentFixture<HostContextComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HostContextComponentComponent]
    });
    fixture = TestBed.createComponent(HostContextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
