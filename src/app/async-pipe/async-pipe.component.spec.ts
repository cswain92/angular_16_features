import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeComponent } from './async-pipe.component';
import { HttpClientModule } from '@angular/common/http';

describe('AsyncPipeComponent', () => {
  let component: AsyncPipeComponent;
  let fixture: ComponentFixture<AsyncPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AsyncPipeComponent,HttpClientModule],
    });
    fixture = TestBed.createComponent(AsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
