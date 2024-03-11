import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Child1Component {

}
