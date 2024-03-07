import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterModule],
    standalone: true,
})
export class AppComponent {
  constructor(private router:Router) {

  }

  navigateTo(url:string) {
    this.router.navigate([`${url}`])
  }
  showMsg(msg:string) {
    return msg;
  }
}
