import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CommonModule, ZippyBasicComponent],
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent {

}
