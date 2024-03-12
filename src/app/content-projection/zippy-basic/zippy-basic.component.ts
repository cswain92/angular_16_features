import { Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZippyContentDirectiveDirective } from 'src/app/zippy-content-directive.directive';

@Component({
  selector: 'app-zippy-basic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zippy-basic.component.html',
  styleUrls: ['./zippy-basic.component.css']
})
export class ZippyBasicComponent {
  @ContentChild(ZippyContentDirectiveDirective) content!: ZippyContentDirectiveDirective;

}
