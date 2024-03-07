import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Calculate } from './calculator';


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, AppComponent]
}));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show a message', () => {
    // Create the component instance
    const component = TestBed.createComponent(AppComponent).componentInstance

    // Call the showMsg() method and test the return value
    const msg = 'Hello, testing!';
    const result = component.showMsg(msg);

    expect(result).toBe(msg);
  });

  xit('Show the addition result', ()=> {
    expect(Calculate(10,20)).toBeGreaterThan(20)
  })

  it('toBe and toEqual Test cases', ()=> {
    var a = true;
    expect(a).toBeTruthy()
  })
});
