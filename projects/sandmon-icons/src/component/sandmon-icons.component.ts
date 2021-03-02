import { Component, ChangeDetectionStrategy, Input, ElementRef, Optional, Inject } from '@angular/core';
import { sandmonIcon } from './sandmon-icons';
import { DOCUMENT } from '@angular/common';
import {SandmonIconsService} from './sandmon-icons.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[nsIcon]',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    ':host::ng-deep svg {width:1em;height:1em}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandmonIconsComponent {

  private svgIcon: SVGElement | undefined;

  @Input('nsIcon')
  set name(iconName: sandmonIcon) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.sandmonIconsService.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private sandmonIconsService: SandmonIconsService,
    @Optional() @Inject(DOCUMENT) private document: any
    ) { }

  svgElementFromString(svgData: string | undefined): SVGElement {
    const div = document.createElement('div');
    if (typeof svgData === 'string') {
      div.innerHTML = svgData;
    }
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
