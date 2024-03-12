import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDeepComponentComponent } from './ng-deep-component/ng-deep-component.component';
import { HostComponentComponent } from './host-component/host-component.component';
import { HostContextComponentComponent } from './host-context-component/host-context-component.component';

@Component({
  selector: 'app-deep-styling',
  standalone: true,
  imports: [CommonModule,NgDeepComponentComponent,HostComponentComponent,HostContextComponentComponent],
  templateUrl: './deep-styling.component.html',
  styleUrls: ['./deep-styling.component.css']
})
export class DeepStylingComponent {
  selectedComponent: string = '';

  openComponent(component: string): void {
    this.selectedComponent = component;
  }
}
