import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/product-card/product-card.component';

@Component({
  selector: 'app-host-component',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './host-component.component.html',
  styleUrls: ['./host-component.component.css']
})
export class HostComponentComponent {

}
