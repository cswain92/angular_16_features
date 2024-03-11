import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, Child1Component,Child2Component],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

}
