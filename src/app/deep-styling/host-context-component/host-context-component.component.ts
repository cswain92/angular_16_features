import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/product-card/product-card.component';

@Component({
  selector: 'app-host-context-component',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './host-context-component.component.html',
  styleUrls: ['./host-context-component.component.css']
})
export class HostContextComponentComponent {

}
