import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appZippyContentDirective]',
  standalone: true
})
export class ZippyContentDirectiveDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}
