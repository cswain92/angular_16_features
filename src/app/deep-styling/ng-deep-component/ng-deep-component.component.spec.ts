import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDeepComponentComponent } from './ng-deep-component.component';

describe('NgDeepComponentComponent', () => {
  let component: NgDeepComponentComponent;
  let fixture: ComponentFixture<NgDeepComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgDeepComponentComponent]
    });
    fixture = TestBed.createComponent(NgDeepComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
