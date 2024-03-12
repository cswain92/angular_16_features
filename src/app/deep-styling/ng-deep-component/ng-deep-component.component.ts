import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/product-card/product-card.component';

@Component({
  selector: 'app-ng-deep-component',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './ng-deep-component.component.html',
  styleUrls: ['./ng-deep-component.component.css']
})
export class NgDeepComponentComponent {

}
